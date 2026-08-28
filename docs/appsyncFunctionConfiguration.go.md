# `appsyncFunctionConfiguration` Submodule <a name="`appsyncFunctionConfiguration` Submodule" id="@cdktn/provider-awscc.appsyncFunctionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncFunctionConfiguration <a name="AppsyncFunctionConfiguration" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration awscc_appsync_function_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncfunctionconfiguration"

appsyncfunctionconfiguration.NewAppsyncFunctionConfiguration(scope Construct, id *string, config AppsyncFunctionConfigurationConfig) AppsyncFunctionConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig">AppsyncFunctionConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig">AppsyncFunctionConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putRuntime">PutRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig">PutSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCodeS3Location">ResetCodeS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetFunctionVersion">ResetFunctionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetMaxBatchSize">ResetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplate">ResetRequestMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplateS3Location">ResetRequestMappingTemplateS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplate">ResetResponseMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplateS3Location">ResetResponseMappingTemplateS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetSyncConfig">ResetSyncConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRuntime` <a name="PutRuntime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putRuntime"></a>

```go
func PutRuntime(value AppsyncFunctionConfigurationRuntime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

---

##### `PutSyncConfig` <a name="PutSyncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig"></a>

```go
func PutSyncConfig(value AppsyncFunctionConfigurationSyncConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

---

##### `ResetCode` <a name="ResetCode" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCode"></a>

```go
func ResetCode()
```

##### `ResetCodeS3Location` <a name="ResetCodeS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetCodeS3Location"></a>

```go
func ResetCodeS3Location()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFunctionVersion` <a name="ResetFunctionVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetFunctionVersion"></a>

```go
func ResetFunctionVersion()
```

##### `ResetMaxBatchSize` <a name="ResetMaxBatchSize" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetMaxBatchSize"></a>

```go
func ResetMaxBatchSize()
```

##### `ResetRequestMappingTemplate` <a name="ResetRequestMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplate"></a>

```go
func ResetRequestMappingTemplate()
```

##### `ResetRequestMappingTemplateS3Location` <a name="ResetRequestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRequestMappingTemplateS3Location"></a>

```go
func ResetRequestMappingTemplateS3Location()
```

##### `ResetResponseMappingTemplate` <a name="ResetResponseMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplate"></a>

```go
func ResetResponseMappingTemplate()
```

##### `ResetResponseMappingTemplateS3Location` <a name="ResetResponseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetResponseMappingTemplateS3Location"></a>

```go
func ResetResponseMappingTemplateS3Location()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetRuntime"></a>

```go
func ResetRuntime()
```

##### `ResetSyncConfig` <a name="ResetSyncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.resetSyncConfig"></a>

```go
func ResetSyncConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncFunctionConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncfunctionconfiguration"

appsyncfunctionconfiguration.AppsyncFunctionConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncfunctionconfiguration"

appsyncfunctionconfiguration.AppsyncFunctionConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncfunctionconfiguration"

appsyncfunctionconfiguration.AppsyncFunctionConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncfunctionconfiguration"

appsyncfunctionconfiguration.AppsyncFunctionConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AppsyncFunctionConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppsyncFunctionConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppsyncFunctionConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncFunctionConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtime">Runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference">AppsyncFunctionConfigurationRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfig">SyncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference">AppsyncFunctionConfigurationSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiIdInput">ApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeInput">CodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3LocationInput">CodeS3LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceNameInput">DataSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersionInput">FunctionVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSizeInput">MaxBatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateInput">RequestMappingTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3LocationInput">RequestMappingTemplateS3LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateInput">ResponseMappingTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3LocationInput">ResponseMappingTemplateS3LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtimeInput">RuntimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfigInput">SyncConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3Location">CodeS3Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceName">DataSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersion">FunctionVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSize">MaxBatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplate">RequestMappingTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3Location">RequestMappingTemplateS3Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplate">ResponseMappingTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3Location">ResponseMappingTemplateS3Location</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtime"></a>

```go
func Runtime() AppsyncFunctionConfigurationRuntimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference">AppsyncFunctionConfigurationRuntimeOutputReference</a>

---

##### `SyncConfig`<sup>Required</sup> <a name="SyncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfig"></a>

```go
func SyncConfig() AppsyncFunctionConfigurationSyncConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference">AppsyncFunctionConfigurationSyncConfigOutputReference</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiIdInput"></a>

```go
func ApiIdInput() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeInput"></a>

```go
func CodeInput() *string
```

- *Type:* *string

---

##### `CodeS3LocationInput`<sup>Optional</sup> <a name="CodeS3LocationInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3LocationInput"></a>

```go
func CodeS3LocationInput() *string
```

- *Type:* *string

---

##### `DataSourceNameInput`<sup>Optional</sup> <a name="DataSourceNameInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceNameInput"></a>

```go
func DataSourceNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FunctionVersionInput`<sup>Optional</sup> <a name="FunctionVersionInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersionInput"></a>

```go
func FunctionVersionInput() *string
```

- *Type:* *string

---

##### `MaxBatchSizeInput`<sup>Optional</sup> <a name="MaxBatchSizeInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSizeInput"></a>

```go
func MaxBatchSizeInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequestMappingTemplateInput`<sup>Optional</sup> <a name="RequestMappingTemplateInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateInput"></a>

```go
func RequestMappingTemplateInput() *string
```

- *Type:* *string

---

##### `RequestMappingTemplateS3LocationInput`<sup>Optional</sup> <a name="RequestMappingTemplateS3LocationInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3LocationInput"></a>

```go
func RequestMappingTemplateS3LocationInput() *string
```

- *Type:* *string

---

##### `ResponseMappingTemplateInput`<sup>Optional</sup> <a name="ResponseMappingTemplateInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateInput"></a>

```go
func ResponseMappingTemplateInput() *string
```

- *Type:* *string

---

##### `ResponseMappingTemplateS3LocationInput`<sup>Optional</sup> <a name="ResponseMappingTemplateS3LocationInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3LocationInput"></a>

```go
func ResponseMappingTemplateS3LocationInput() *string
```

- *Type:* *string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.runtimeInput"></a>

```go
func RuntimeInput() interface{}
```

- *Type:* interface{}

---

##### `SyncConfigInput`<sup>Optional</sup> <a name="SyncConfigInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.syncConfigInput"></a>

```go
func SyncConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `CodeS3Location`<sup>Required</sup> <a name="CodeS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.codeS3Location"></a>

```go
func CodeS3Location() *string
```

- *Type:* *string

---

##### `DataSourceName`<sup>Required</sup> <a name="DataSourceName" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.dataSourceName"></a>

```go
func DataSourceName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FunctionVersion`<sup>Required</sup> <a name="FunctionVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.functionVersion"></a>

```go
func FunctionVersion() *string
```

- *Type:* *string

---

##### `MaxBatchSize`<sup>Required</sup> <a name="MaxBatchSize" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.maxBatchSize"></a>

```go
func MaxBatchSize() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RequestMappingTemplate`<sup>Required</sup> <a name="RequestMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplate"></a>

```go
func RequestMappingTemplate() *string
```

- *Type:* *string

---

##### `RequestMappingTemplateS3Location`<sup>Required</sup> <a name="RequestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.requestMappingTemplateS3Location"></a>

```go
func RequestMappingTemplateS3Location() *string
```

- *Type:* *string

---

##### `ResponseMappingTemplate`<sup>Required</sup> <a name="ResponseMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplate"></a>

```go
func ResponseMappingTemplate() *string
```

- *Type:* *string

---

##### `ResponseMappingTemplateS3Location`<sup>Required</sup> <a name="ResponseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.responseMappingTemplateS3Location"></a>

```go
func ResponseMappingTemplateS3Location() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncFunctionConfigurationConfig <a name="AppsyncFunctionConfigurationConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncfunctionconfiguration"

&appsyncfunctionconfiguration.AppsyncFunctionConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApiId: *string,
	DataSourceName: *string,
	Name: *string,
	Code: *string,
	CodeS3Location: *string,
	Description: *string,
	FunctionVersion: *string,
	MaxBatchSize: *f64,
	RequestMappingTemplate: *string,
	RequestMappingTemplateS3Location: *string,
	ResponseMappingTemplate: *string,
	ResponseMappingTemplateS3Location: *string,
	Runtime: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime,
	SyncConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.apiId">ApiId</a></code> | <code>*string</code> | The AWS AppSync GraphQL API that you want to attach using this function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dataSourceName">DataSourceName</a></code> | <code>*string</code> | The name of data source this function will attach. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.code">Code</a></code> | <code>*string</code> | The resolver code that contains the request and response functions. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.codeS3Location">CodeS3Location</a></code> | <code>*string</code> | The Amazon S3 endpoint (where the code is located??). |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.description">Description</a></code> | <code>*string</code> | The function description. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.functionVersion">FunctionVersion</a></code> | <code>*string</code> | The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.maxBatchSize">MaxBatchSize</a></code> | <code>*f64</code> | The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplate">RequestMappingTemplate</a></code> | <code>*string</code> | The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplateS3Location">RequestMappingTemplateS3Location</a></code> | <code>*string</code> | Describes a Sync configuration for a resolver. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplate">ResponseMappingTemplate</a></code> | <code>*string</code> | The Function response mapping template. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplateS3Location">ResponseMappingTemplateS3Location</a></code> | <code>*string</code> | The location of a response mapping template in an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.runtime">Runtime</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a></code> | Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.syncConfig">SyncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a></code> | Describes a Sync configuration for a resolver. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.apiId"></a>

```go
ApiId *string
```

- *Type:* *string

The AWS AppSync GraphQL API that you want to attach using this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#api_id AppsyncFunctionConfiguration#api_id}

---

##### `DataSourceName`<sup>Required</sup> <a name="DataSourceName" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.dataSourceName"></a>

```go
DataSourceName *string
```

- *Type:* *string

The name of data source this function will attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#data_source_name AppsyncFunctionConfiguration#data_source_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#name AppsyncFunctionConfiguration#name}

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.code"></a>

```go
Code *string
```

- *Type:* *string

The resolver code that contains the request and response functions.

When code is used, the runtime is required. The runtime value must be APPSYNC_JS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#code AppsyncFunctionConfiguration#code}

---

##### `CodeS3Location`<sup>Optional</sup> <a name="CodeS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.codeS3Location"></a>

```go
CodeS3Location *string
```

- *Type:* *string

The Amazon S3 endpoint (where the code is located??).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#code_s3_location AppsyncFunctionConfiguration#code_s3_location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The function description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#description AppsyncFunctionConfiguration#description}

---

##### `FunctionVersion`<sup>Optional</sup> <a name="FunctionVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.functionVersion"></a>

```go
FunctionVersion *string
```

- *Type:* *string

The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#function_version AppsyncFunctionConfiguration#function_version}

---

##### `MaxBatchSize`<sup>Optional</sup> <a name="MaxBatchSize" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.maxBatchSize"></a>

```go
MaxBatchSize *f64
```

- *Type:* *f64

The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#max_batch_size AppsyncFunctionConfiguration#max_batch_size}

---

##### `RequestMappingTemplate`<sup>Optional</sup> <a name="RequestMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplate"></a>

```go
RequestMappingTemplate *string
```

- *Type:* *string

The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#request_mapping_template AppsyncFunctionConfiguration#request_mapping_template}

---

##### `RequestMappingTemplateS3Location`<sup>Optional</sup> <a name="RequestMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.requestMappingTemplateS3Location"></a>

```go
RequestMappingTemplateS3Location *string
```

- *Type:* *string

Describes a Sync configuration for a resolver.

Contains information on which Conflict Detection, as well as Resolution strategy, should be performed when the resolver is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#request_mapping_template_s3_location AppsyncFunctionConfiguration#request_mapping_template_s3_location}

---

##### `ResponseMappingTemplate`<sup>Optional</sup> <a name="ResponseMappingTemplate" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplate"></a>

```go
ResponseMappingTemplate *string
```

- *Type:* *string

The Function response mapping template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#response_mapping_template AppsyncFunctionConfiguration#response_mapping_template}

---

##### `ResponseMappingTemplateS3Location`<sup>Optional</sup> <a name="ResponseMappingTemplateS3Location" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.responseMappingTemplateS3Location"></a>

```go
ResponseMappingTemplateS3Location *string
```

- *Type:* *string

The location of a response mapping template in an Amazon S3 bucket.

Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#response_mapping_template_s3_location AppsyncFunctionConfiguration#response_mapping_template_s3_location}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.runtime"></a>

```go
Runtime AppsyncFunctionConfigurationRuntime
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime">AppsyncFunctionConfigurationRuntime</a>

Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function.

Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#runtime AppsyncFunctionConfiguration#runtime}

---

##### `SyncConfig`<sup>Optional</sup> <a name="SyncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationConfig.property.syncConfig"></a>

```go
SyncConfig AppsyncFunctionConfigurationSyncConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig">AppsyncFunctionConfigurationSyncConfig</a>

Describes a Sync configuration for a resolver.

Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#sync_config AppsyncFunctionConfiguration#sync_config}

---

### AppsyncFunctionConfigurationRuntime <a name="AppsyncFunctionConfigurationRuntime" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncfunctionconfiguration"

&appsyncfunctionconfiguration.AppsyncFunctionConfigurationRuntime {
	Name: *string,
	RuntimeVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.name">Name</a></code> | <code>*string</code> | The name of the runtime to use. Currently, the only allowed value is APPSYNC_JS. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | The version of the runtime to use. Currently, the only allowed version is 1.0.0. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the runtime to use. Currently, the only allowed value is APPSYNC_JS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#name AppsyncFunctionConfiguration#name}

---

##### `RuntimeVersion`<sup>Optional</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntime.property.runtimeVersion"></a>

```go
RuntimeVersion *string
```

- *Type:* *string

The version of the runtime to use. Currently, the only allowed version is 1.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#runtime_version AppsyncFunctionConfiguration#runtime_version}

---

### AppsyncFunctionConfigurationSyncConfig <a name="AppsyncFunctionConfigurationSyncConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncfunctionconfiguration"

&appsyncfunctionconfiguration.AppsyncFunctionConfigurationSyncConfig {
	ConflictDetection: *string,
	ConflictHandler: *string,
	LambdaConflictHandlerConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictDetection">ConflictDetection</a></code> | <code>*string</code> | The Conflict Detection strategy to use. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictHandler">ConflictHandler</a></code> | <code>*string</code> | The Conflict Resolution strategy to perform in the event of a conflict. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.lambdaConflictHandlerConfig">LambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a></code> | The LambdaConflictHandlerConfig when configuring LAMBDA as the Conflict Handler. |

---

##### `ConflictDetection`<sup>Optional</sup> <a name="ConflictDetection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictDetection"></a>

```go
ConflictDetection *string
```

- *Type:* *string

The Conflict Detection strategy to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#conflict_detection AppsyncFunctionConfiguration#conflict_detection}

---

##### `ConflictHandler`<sup>Optional</sup> <a name="ConflictHandler" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.conflictHandler"></a>

```go
ConflictHandler *string
```

- *Type:* *string

The Conflict Resolution strategy to perform in the event of a conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#conflict_handler AppsyncFunctionConfiguration#conflict_handler}

---

##### `LambdaConflictHandlerConfig`<sup>Optional</sup> <a name="LambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfig.property.lambdaConflictHandlerConfig"></a>

```go
LambdaConflictHandlerConfig AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

The LambdaConflictHandlerConfig when configuring LAMBDA as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#lambda_conflict_handler_config AppsyncFunctionConfiguration#lambda_conflict_handler_config}

---

### AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig <a name="AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncfunctionconfiguration"

&appsyncfunctionconfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig {
	LambdaConflictHandlerArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">LambdaConflictHandlerArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler. |

---

##### `LambdaConflictHandlerArn`<sup>Optional</sup> <a name="LambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```go
LambdaConflictHandlerArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_function_configuration#lambda_conflict_handler_arn AppsyncFunctionConfiguration#lambda_conflict_handler_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncFunctionConfigurationRuntimeOutputReference <a name="AppsyncFunctionConfigurationRuntimeOutputReference" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncfunctionconfiguration"

appsyncfunctionconfiguration.NewAppsyncFunctionConfigurationRuntimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncFunctionConfigurationRuntimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetRuntimeVersion">ResetRuntimeVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRuntimeVersion` <a name="ResetRuntimeVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.resetRuntimeVersion"></a>

```go
func ResetRuntimeVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersionInput"></a>

```go
func RuntimeVersionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationRuntimeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncfunctionconfiguration"

appsyncfunctionconfiguration.NewAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">ResetLambdaConflictHandlerArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaConflictHandlerArn` <a name="ResetLambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```go
func ResetLambdaConflictHandlerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">LambdaConflictHandlerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">LambdaConflictHandlerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaConflictHandlerArnInput`<sup>Optional</sup> <a name="LambdaConflictHandlerArnInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```go
func LambdaConflictHandlerArnInput() *string
```

- *Type:* *string

---

##### `LambdaConflictHandlerArn`<sup>Required</sup> <a name="LambdaConflictHandlerArn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```go
func LambdaConflictHandlerArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsyncFunctionConfigurationSyncConfigOutputReference <a name="AppsyncFunctionConfigurationSyncConfigOutputReference" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appsyncfunctionconfiguration"

appsyncfunctionconfiguration.NewAppsyncFunctionConfigurationSyncConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsyncFunctionConfigurationSyncConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.putLambdaConflictHandlerConfig">PutLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictDetection">ResetConflictDetection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictHandler">ResetConflictHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetLambdaConflictHandlerConfig">ResetLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambdaConflictHandlerConfig` <a name="PutLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```go
func PutLambdaConflictHandlerConfig(value AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

---

##### `ResetConflictDetection` <a name="ResetConflictDetection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictDetection"></a>

```go
func ResetConflictDetection()
```

##### `ResetConflictHandler` <a name="ResetConflictHandler" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetConflictHandler"></a>

```go
func ResetConflictHandler()
```

##### `ResetLambdaConflictHandlerConfig` <a name="ResetLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```go
func ResetLambdaConflictHandlerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfig">LambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetectionInput">ConflictDetectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandlerInput">ConflictHandlerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">LambdaConflictHandlerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetection">ConflictDetection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandler">ConflictHandler</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaConflictHandlerConfig`<sup>Required</sup> <a name="LambdaConflictHandlerConfig" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```go
func LambdaConflictHandlerConfig() AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `ConflictDetectionInput`<sup>Optional</sup> <a name="ConflictDetectionInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetectionInput"></a>

```go
func ConflictDetectionInput() *string
```

- *Type:* *string

---

##### `ConflictHandlerInput`<sup>Optional</sup> <a name="ConflictHandlerInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandlerInput"></a>

```go
func ConflictHandlerInput() *string
```

- *Type:* *string

---

##### `LambdaConflictHandlerConfigInput`<sup>Optional</sup> <a name="LambdaConflictHandlerConfigInput" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```go
func LambdaConflictHandlerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ConflictDetection`<sup>Required</sup> <a name="ConflictDetection" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetection"></a>

```go
func ConflictDetection() *string
```

- *Type:* *string

---

##### `ConflictHandler`<sup>Required</sup> <a name="ConflictHandler" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandler"></a>

```go
func ConflictHandler() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncFunctionConfiguration.AppsyncFunctionConfigurationSyncConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



