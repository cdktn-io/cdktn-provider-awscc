# `apigatewayv2Stage` Submodule <a name="`apigatewayv2Stage` Submodule" id="@cdktn/provider-awscc.apigatewayv2Stage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Stage <a name="Apigatewayv2Stage" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage awscc_apigatewayv2_stage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2stage"

apigatewayv2stage.NewApigatewayv2Stage(scope Construct, id *string, config Apigatewayv2StageConfig) Apigatewayv2Stage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig">Apigatewayv2StageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig">Apigatewayv2StageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings">PutAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings">PutDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetAccessLogSettings">ResetAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetAutoDeploy">ResetAutoDeploy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetClientCertificateId">ResetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDefaultRouteSettings">ResetDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetRouteSettings">ResetRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetStageVariables">ResetStageVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessLogSettings` <a name="PutAccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings"></a>

```go
func PutAccessLogSettings(value Apigatewayv2StageAccessLogSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---

##### `PutDefaultRouteSettings` <a name="PutDefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings"></a>

```go
func PutDefaultRouteSettings(value Apigatewayv2StageDefaultRouteSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---

##### `ResetAccessLogSettings` <a name="ResetAccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetAccessLogSettings"></a>

```go
func ResetAccessLogSettings()
```

##### `ResetAutoDeploy` <a name="ResetAutoDeploy" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetAutoDeploy"></a>

```go
func ResetAutoDeploy()
```

##### `ResetClientCertificateId` <a name="ResetClientCertificateId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetClientCertificateId"></a>

```go
func ResetClientCertificateId()
```

##### `ResetDefaultRouteSettings` <a name="ResetDefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDefaultRouteSettings"></a>

```go
func ResetDefaultRouteSettings()
```

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDeploymentId"></a>

```go
func ResetDeploymentId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRouteSettings` <a name="ResetRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetRouteSettings"></a>

```go
func ResetRouteSettings()
```

##### `ResetStageVariables` <a name="ResetStageVariables" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetStageVariables"></a>

```go
func ResetStageVariables()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2Stage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2stage"

apigatewayv2stage.Apigatewayv2Stage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2stage"

apigatewayv2stage.Apigatewayv2Stage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2stage"

apigatewayv2stage.Apigatewayv2Stage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2stage"

apigatewayv2stage.Apigatewayv2Stage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Apigatewayv2Stage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Apigatewayv2Stage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Apigatewayv2Stage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2Stage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettings">AccessLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference">Apigatewayv2StageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettings">DefaultRouteSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference">Apigatewayv2StageDefaultRouteSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettingsInput">AccessLogSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.apiIdInput">ApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeployInput">AutoDeployInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateIdInput">ClientCertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettingsInput">DefaultRouteSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettingsInput">RouteSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageNameInput">StageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariablesInput">StageVariablesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tagsInput">TagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeploy">AutoDeploy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateId">ClientCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettings">RouteSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageName">StageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariables">StageVariables</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tags">Tags</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessLogSettings`<sup>Required</sup> <a name="AccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettings"></a>

```go
func AccessLogSettings() Apigatewayv2StageAccessLogSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference">Apigatewayv2StageAccessLogSettingsOutputReference</a>

---

##### `DefaultRouteSettings`<sup>Required</sup> <a name="DefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettings"></a>

```go
func DefaultRouteSettings() Apigatewayv2StageDefaultRouteSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference">Apigatewayv2StageDefaultRouteSettingsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccessLogSettingsInput`<sup>Optional</sup> <a name="AccessLogSettingsInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettingsInput"></a>

```go
func AccessLogSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.apiIdInput"></a>

```go
func ApiIdInput() *string
```

- *Type:* *string

---

##### `AutoDeployInput`<sup>Optional</sup> <a name="AutoDeployInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeployInput"></a>

```go
func AutoDeployInput() interface{}
```

- *Type:* interface{}

---

##### `ClientCertificateIdInput`<sup>Optional</sup> <a name="ClientCertificateIdInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateIdInput"></a>

```go
func ClientCertificateIdInput() *string
```

- *Type:* *string

---

##### `DefaultRouteSettingsInput`<sup>Optional</sup> <a name="DefaultRouteSettingsInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettingsInput"></a>

```go
func DefaultRouteSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentIdInput"></a>

```go
func DeploymentIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `RouteSettingsInput`<sup>Optional</sup> <a name="RouteSettingsInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettingsInput"></a>

```go
func RouteSettingsInput() *string
```

- *Type:* *string

---

##### `StageNameInput`<sup>Optional</sup> <a name="StageNameInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageNameInput"></a>

```go
func StageNameInput() *string
```

- *Type:* *string

---

##### `StageVariablesInput`<sup>Optional</sup> <a name="StageVariablesInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariablesInput"></a>

```go
func StageVariablesInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tagsInput"></a>

```go
func TagsInput() *string
```

- *Type:* *string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `AutoDeploy`<sup>Required</sup> <a name="AutoDeploy" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeploy"></a>

```go
func AutoDeploy() interface{}
```

- *Type:* interface{}

---

##### `ClientCertificateId`<sup>Required</sup> <a name="ClientCertificateId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateId"></a>

```go
func ClientCertificateId() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `RouteSettings`<sup>Required</sup> <a name="RouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettings"></a>

```go
func RouteSettings() *string
```

- *Type:* *string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageName"></a>

```go
func StageName() *string
```

- *Type:* *string

---

##### `StageVariables`<sup>Required</sup> <a name="StageVariables" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariables"></a>

```go
func StageVariables() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tags"></a>

```go
func Tags() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2StageAccessLogSettings <a name="Apigatewayv2StageAccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2stage"

&apigatewayv2stage.Apigatewayv2StageAccessLogSettings {
	DestinationArn: *string,
	Format: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#format Apigatewayv2Stage#format}. |

---

##### `DestinationArn`<sup>Optional</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.destinationArn"></a>

```go
DestinationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#format Apigatewayv2Stage#format}.

---

### Apigatewayv2StageConfig <a name="Apigatewayv2StageConfig" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2stage"

&apigatewayv2stage.Apigatewayv2StageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApiId: *string,
	StageName: *string,
	AccessLogSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings,
	AutoDeploy: interface{},
	ClientCertificateId: *string,
	DefaultRouteSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings,
	DeploymentId: *string,
	Description: *string,
	RouteSettings: *string,
	StageVariables: *string,
	Tags: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.apiId">ApiId</a></code> | <code>*string</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageName">StageName</a></code> | <code>*string</code> | The stage name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.accessLogSettings">AccessLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | Settings for logging access in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.autoDeploy">AutoDeploy</a></code> | <code>interface{}</code> | Specifies whether updates to an API automatically trigger a new deployment. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.clientCertificateId">ClientCertificateId</a></code> | <code>*string</code> | The identifier of a client certificate for a Stage. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.defaultRouteSettings">DefaultRouteSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | The default route settings for the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.description">Description</a></code> | <code>*string</code> | The description for the API stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.routeSettings">RouteSettings</a></code> | <code>*string</code> | Route settings for the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageVariables">StageVariables</a></code> | <code>*string</code> | A map that defines the stage variables for a Stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.tags">Tags</a></code> | <code>*string</code> | The collection of tags. Each tag element is associated with a given resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.apiId"></a>

```go
ApiId *string
```

- *Type:* *string

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageName"></a>

```go
StageName *string
```

- *Type:* *string

The stage name.

Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#stage_name Apigatewayv2Stage#stage_name}

---

##### `AccessLogSettings`<sup>Optional</sup> <a name="AccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.accessLogSettings"></a>

```go
AccessLogSettings Apigatewayv2StageAccessLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

Settings for logging access in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#access_log_settings Apigatewayv2Stage#access_log_settings}

---

##### `AutoDeploy`<sup>Optional</sup> <a name="AutoDeploy" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.autoDeploy"></a>

```go
AutoDeploy interface{}
```

- *Type:* interface{}

Specifies whether updates to an API automatically trigger a new deployment. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}

---

##### `ClientCertificateId`<sup>Optional</sup> <a name="ClientCertificateId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.clientCertificateId"></a>

```go
ClientCertificateId *string
```

- *Type:* *string

The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}

---

##### `DefaultRouteSettings`<sup>Optional</sup> <a name="DefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.defaultRouteSettings"></a>

```go
DefaultRouteSettings Apigatewayv2StageDefaultRouteSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

The default route settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#default_route_settings Apigatewayv2Stage#default_route_settings}

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.deploymentId"></a>

```go
DeploymentId *string
```

- *Type:* *string

The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description for the API stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#description Apigatewayv2Stage#description}

---

##### `RouteSettings`<sup>Optional</sup> <a name="RouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.routeSettings"></a>

```go
RouteSettings *string
```

- *Type:* *string

Route settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#route_settings Apigatewayv2Stage#route_settings}

---

##### `StageVariables`<sup>Optional</sup> <a name="StageVariables" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageVariables"></a>

```go
StageVariables *string
```

- *Type:* *string

A map that defines the stage variables for a Stage.

Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&=,]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.tags"></a>

```go
Tags *string
```

- *Type:* *string

The collection of tags. Each tag element is associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#tags Apigatewayv2Stage#tags}

---

### Apigatewayv2StageDefaultRouteSettings <a name="Apigatewayv2StageDefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2stage"

&apigatewayv2stage.Apigatewayv2StageDefaultRouteSettings {
	DataTraceEnabled: interface{},
	DetailedMetricsEnabled: interface{},
	LoggingLevel: *string,
	ThrottlingBurstLimit: *f64,
	ThrottlingRateLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.detailedMetricsEnabled">DetailedMetricsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.loggingLevel">LoggingLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}. |

---

##### `DataTraceEnabled`<sup>Optional</sup> <a name="DataTraceEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.dataTraceEnabled"></a>

```go
DataTraceEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}.

---

##### `DetailedMetricsEnabled`<sup>Optional</sup> <a name="DetailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.detailedMetricsEnabled"></a>

```go
DetailedMetricsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}.

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.loggingLevel"></a>

```go
LoggingLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}.

---

##### `ThrottlingBurstLimit`<sup>Optional</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingBurstLimit"></a>

```go
ThrottlingBurstLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}.

---

##### `ThrottlingRateLimit`<sup>Optional</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingRateLimit"></a>

```go
ThrottlingRateLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2StageAccessLogSettingsOutputReference <a name="Apigatewayv2StageAccessLogSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2stage"

apigatewayv2stage.NewApigatewayv2StageAccessLogSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Apigatewayv2StageAccessLogSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resetDestinationArn">ResetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationArn` <a name="ResetDestinationArn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resetDestinationArn"></a>

```go
func ResetDestinationArn()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resetFormat"></a>

```go
func ResetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArnInput">DestinationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArnInput"></a>

```go
func DestinationArnInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArn"></a>

```go
func DestinationArn() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2StageDefaultRouteSettingsOutputReference <a name="Apigatewayv2StageDefaultRouteSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2stage"

apigatewayv2stage.NewApigatewayv2StageDefaultRouteSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Apigatewayv2StageDefaultRouteSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDataTraceEnabled">ResetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled">ResetDetailedMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit">ResetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit">ResetThrottlingRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataTraceEnabled` <a name="ResetDataTraceEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDataTraceEnabled"></a>

```go
func ResetDataTraceEnabled()
```

##### `ResetDetailedMetricsEnabled` <a name="ResetDetailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled"></a>

```go
func ResetDetailedMetricsEnabled()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetLoggingLevel"></a>

```go
func ResetLoggingLevel()
```

##### `ResetThrottlingBurstLimit` <a name="ResetThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit"></a>

```go
func ResetThrottlingBurstLimit()
```

##### `ResetThrottlingRateLimit` <a name="ResetThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit"></a>

```go
func ResetThrottlingRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabledInput">DataTraceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput">DetailedMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput">ThrottlingBurstLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput">ThrottlingRateLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled">DetailedMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevel">LoggingLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataTraceEnabledInput`<sup>Optional</sup> <a name="DataTraceEnabledInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabledInput"></a>

```go
func DataTraceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DetailedMetricsEnabledInput`<sup>Optional</sup> <a name="DetailedMetricsEnabledInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput"></a>

```go
func DetailedMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevelInput"></a>

```go
func LoggingLevelInput() *string
```

- *Type:* *string

---

##### `ThrottlingBurstLimitInput`<sup>Optional</sup> <a name="ThrottlingBurstLimitInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```go
func ThrottlingBurstLimitInput() *f64
```

- *Type:* *f64

---

##### `ThrottlingRateLimitInput`<sup>Optional</sup> <a name="ThrottlingRateLimitInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput"></a>

```go
func ThrottlingRateLimitInput() *f64
```

- *Type:* *f64

---

##### `DataTraceEnabled`<sup>Required</sup> <a name="DataTraceEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabled"></a>

```go
func DataTraceEnabled() interface{}
```

- *Type:* interface{}

---

##### `DetailedMetricsEnabled`<sup>Required</sup> <a name="DetailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```go
func DetailedMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevel"></a>

```go
func LoggingLevel() *string
```

- *Type:* *string

---

##### `ThrottlingBurstLimit`<sup>Required</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```go
func ThrottlingBurstLimit() *f64
```

- *Type:* *f64

---

##### `ThrottlingRateLimit`<sup>Required</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```go
func ThrottlingRateLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



