# `apigatewayRestApi` Submodule <a name="`apigatewayRestApi` Submodule" id="@cdktn/provider-awscc.apigatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayRestApi <a name="ApigatewayRestApi" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api awscc_apigateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayrestapi"

apigatewayrestapi.NewApigatewayRestApi(scope Construct, id *string, config ApigatewayRestApiConfig) ApigatewayRestApi
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig">ApigatewayRestApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig">ApigatewayRestApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location">PutBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration">PutEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetApiKeySourceType">ResetApiKeySourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBinaryMediaTypes">ResetBinaryMediaTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBodyS3Location">ResetBodyS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetCloneFrom">ResetCloneFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDisableExecuteApiEndpoint">ResetDisableExecuteApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointAccessMode">ResetEndpointAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointConfiguration">ResetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetFailOnWarnings">ResetFailOnWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMinimumCompressionSize">ResetMinimumCompressionSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBodyS3Location` <a name="PutBodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location"></a>

```go
func PutBodyS3Location(value ApigatewayRestApiBodyS3Location)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putBodyS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

---

##### `PutEndpointConfiguration` <a name="PutEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration"></a>

```go
func PutEndpointConfiguration(value ApigatewayRestApiEndpointConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApiKeySourceType` <a name="ResetApiKeySourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetApiKeySourceType"></a>

```go
func ResetApiKeySourceType()
```

##### `ResetBinaryMediaTypes` <a name="ResetBinaryMediaTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBinaryMediaTypes"></a>

```go
func ResetBinaryMediaTypes()
```

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBody"></a>

```go
func ResetBody()
```

##### `ResetBodyS3Location` <a name="ResetBodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetBodyS3Location"></a>

```go
func ResetBodyS3Location()
```

##### `ResetCloneFrom` <a name="ResetCloneFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetCloneFrom"></a>

```go
func ResetCloneFrom()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableExecuteApiEndpoint` <a name="ResetDisableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetDisableExecuteApiEndpoint"></a>

```go
func ResetDisableExecuteApiEndpoint()
```

##### `ResetEndpointAccessMode` <a name="ResetEndpointAccessMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointAccessMode"></a>

```go
func ResetEndpointAccessMode()
```

##### `ResetEndpointConfiguration` <a name="ResetEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetEndpointConfiguration"></a>

```go
func ResetEndpointConfiguration()
```

##### `ResetFailOnWarnings` <a name="ResetFailOnWarnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetFailOnWarnings"></a>

```go
func ResetFailOnWarnings()
```

##### `ResetMinimumCompressionSize` <a name="ResetMinimumCompressionSize" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMinimumCompressionSize"></a>

```go
func ResetMinimumCompressionSize()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetMode"></a>

```go
func ResetMode()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetName"></a>

```go
func ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetSecurityPolicy"></a>

```go
func ResetSecurityPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayRestApi resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayrestapi"

apigatewayrestapi.ApigatewayRestApi_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayrestapi"

apigatewayrestapi.ApigatewayRestApi_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayrestapi"

apigatewayrestapi.ApigatewayRestApi_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayrestapi"

apigatewayrestapi.ApigatewayRestApi_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApigatewayRestApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigatewayRestApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigatewayRestApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayRestApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3Location">BodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference">ApigatewayRestApiBodyS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference">ApigatewayRestApiEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.restApiId">RestApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.rootResourceId">RootResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList">ApigatewayRestApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceTypeInput">ApiKeySourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypesInput">BinaryMediaTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3LocationInput">BodyS3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFromInput">CloneFromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpointInput">DisableExecuteApiEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessModeInput">EndpointAccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfigurationInput">EndpointConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarningsInput">FailOnWarningsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSizeInput">MinimumCompressionSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceType">ApiKeySourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypes">BinaryMediaTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFrom">CloneFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarnings">FailOnWarnings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSize">MinimumCompressionSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BodyS3Location`<sup>Required</sup> <a name="BodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3Location"></a>

```go
func BodyS3Location() ApigatewayRestApiBodyS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference">ApigatewayRestApiBodyS3LocationOutputReference</a>

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfiguration"></a>

```go
func EndpointConfiguration() ApigatewayRestApiEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference">ApigatewayRestApiEndpointConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.restApiId"></a>

```go
func RestApiId() *string
```

- *Type:* *string

---

##### `RootResourceId`<sup>Required</sup> <a name="RootResourceId" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.rootResourceId"></a>

```go
func RootResourceId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tags"></a>

```go
func Tags() ApigatewayRestApiTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList">ApigatewayRestApiTagsList</a>

---

##### `ApiKeySourceTypeInput`<sup>Optional</sup> <a name="ApiKeySourceTypeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceTypeInput"></a>

```go
func ApiKeySourceTypeInput() *string
```

- *Type:* *string

---

##### `BinaryMediaTypesInput`<sup>Optional</sup> <a name="BinaryMediaTypesInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypesInput"></a>

```go
func BinaryMediaTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `BodyS3LocationInput`<sup>Optional</sup> <a name="BodyS3LocationInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.bodyS3LocationInput"></a>

```go
func BodyS3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `CloneFromInput`<sup>Optional</sup> <a name="CloneFromInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFromInput"></a>

```go
func CloneFromInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableExecuteApiEndpointInput`<sup>Optional</sup> <a name="DisableExecuteApiEndpointInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpointInput"></a>

```go
func DisableExecuteApiEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointAccessModeInput`<sup>Optional</sup> <a name="EndpointAccessModeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessModeInput"></a>

```go
func EndpointAccessModeInput() *string
```

- *Type:* *string

---

##### `EndpointConfigurationInput`<sup>Optional</sup> <a name="EndpointConfigurationInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointConfigurationInput"></a>

```go
func EndpointConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `FailOnWarningsInput`<sup>Optional</sup> <a name="FailOnWarningsInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarningsInput"></a>

```go
func FailOnWarningsInput() interface{}
```

- *Type:* interface{}

---

##### `MinimumCompressionSizeInput`<sup>Optional</sup> <a name="MinimumCompressionSizeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSizeInput"></a>

```go
func MinimumCompressionSizeInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicyInput"></a>

```go
func SecurityPolicyInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiKeySourceType`<sup>Required</sup> <a name="ApiKeySourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.apiKeySourceType"></a>

```go
func ApiKeySourceType() *string
```

- *Type:* *string

---

##### `BinaryMediaTypes`<sup>Required</sup> <a name="BinaryMediaTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.binaryMediaTypes"></a>

```go
func BinaryMediaTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `CloneFrom`<sup>Required</sup> <a name="CloneFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.cloneFrom"></a>

```go
func CloneFrom() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableExecuteApiEndpoint`<sup>Required</sup> <a name="DisableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.disableExecuteApiEndpoint"></a>

```go
func DisableExecuteApiEndpoint() interface{}
```

- *Type:* interface{}

---

##### `EndpointAccessMode`<sup>Required</sup> <a name="EndpointAccessMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.endpointAccessMode"></a>

```go
func EndpointAccessMode() *string
```

- *Type:* *string

---

##### `FailOnWarnings`<sup>Required</sup> <a name="FailOnWarnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.failOnWarnings"></a>

```go
func FailOnWarnings() interface{}
```

- *Type:* interface{}

---

##### `MinimumCompressionSize`<sup>Required</sup> <a name="MinimumCompressionSize" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.minimumCompressionSize"></a>

```go
func MinimumCompressionSize() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApi.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayRestApiBodyS3Location <a name="ApigatewayRestApiBodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayrestapi"

&apigatewayrestapi.ApigatewayRestApiBodyS3Location {
	Bucket: *string,
	ETag: *string,
	Key: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the S3 bucket where the OpenAPI file is stored. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.eTag">ETag</a></code> | <code>*string</code> | The Amazon S3 ETag (a file checksum) of the OpenAPI file. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.key">Key</a></code> | <code>*string</code> | The file name of the OpenAPI file (Amazon S3 object name). |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.version">Version</a></code> | <code>*string</code> | For versioning-enabled buckets, a specific version of the OpenAPI file. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the S3 bucket where the OpenAPI file is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#bucket ApigatewayRestApi#bucket}

---

##### `ETag`<sup>Optional</sup> <a name="ETag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.eTag"></a>

```go
ETag *string
```

- *Type:* *string

The Amazon S3 ETag (a file checksum) of the OpenAPI file.

If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#e_tag ApigatewayRestApi#e_tag}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.key"></a>

```go
Key *string
```

- *Type:* *string

The file name of the OpenAPI file (Amazon S3 object name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#key ApigatewayRestApi#key}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location.property.version"></a>

```go
Version *string
```

- *Type:* *string

For versioning-enabled buckets, a specific version of the OpenAPI file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#version ApigatewayRestApi#version}

---

### ApigatewayRestApiConfig <a name="ApigatewayRestApiConfig" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayrestapi"

&apigatewayrestapi.ApigatewayRestApiConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApiKeySourceType: *string,
	BinaryMediaTypes: *[]*string,
	Body: *string,
	BodyS3Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location,
	CloneFrom: *string,
	Description: *string,
	DisableExecuteApiEndpoint: interface{},
	EndpointAccessMode: *string,
	EndpointConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration,
	FailOnWarnings: interface{},
	MinimumCompressionSize: *f64,
	Mode: *string,
	Name: *string,
	Parameters: *string,
	Policy: *string,
	SecurityPolicy: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.apiKeySourceType">ApiKeySourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.binaryMediaTypes">BinaryMediaTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.body">Body</a></code> | <code>*string</code> | An OpenAPI specification that defines a set of RESTful APIs in JSON format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.bodyS3Location">BodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a></code> | The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.cloneFrom">CloneFrom</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a></code> | A list of the endpoint types and IP address types of the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.failOnWarnings">FailOnWarnings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.minimumCompressionSize">MinimumCompressionSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.mode">Mode</a></code> | <code>*string</code> | This property applies only when you use OpenAPI to define your REST API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.name">Name</a></code> | <code>*string</code> | The name of the RestApi. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.policy">Policy</a></code> | <code>*string</code> | A policy document that contains the permissions for the ``RestApi`` resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiKeySourceType`<sup>Optional</sup> <a name="ApiKeySourceType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.apiKeySourceType"></a>

```go
ApiKeySourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#api_key_source_type ApigatewayRestApi#api_key_source_type}.

---

##### `BinaryMediaTypes`<sup>Optional</sup> <a name="BinaryMediaTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.binaryMediaTypes"></a>

```go
BinaryMediaTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#binary_media_types ApigatewayRestApi#binary_media_types}.

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.body"></a>

```go
Body *string
```

- *Type:* *string

An OpenAPI specification that defines a set of RESTful APIs in JSON format.

For YAML templates, you can also provide the specification in YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#body ApigatewayRestApi#body}

---

##### `BodyS3Location`<sup>Optional</sup> <a name="BodyS3Location" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.bodyS3Location"></a>

```go
BodyS3Location ApigatewayRestApiBodyS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3Location">ApigatewayRestApiBodyS3Location</a>

The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#body_s3_location ApigatewayRestApi#body_s3_location}

---

##### `CloneFrom`<sup>Optional</sup> <a name="CloneFrom" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.cloneFrom"></a>

```go
CloneFrom *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#clone_from ApigatewayRestApi#clone_from}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#description ApigatewayRestApi#description}.

---

##### `DisableExecuteApiEndpoint`<sup>Optional</sup> <a name="DisableExecuteApiEndpoint" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.disableExecuteApiEndpoint"></a>

```go
DisableExecuteApiEndpoint interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint ApigatewayRestApi#disable_execute_api_endpoint}.

---

##### `EndpointAccessMode`<sup>Optional</sup> <a name="EndpointAccessMode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointAccessMode"></a>

```go
EndpointAccessMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_access_mode ApigatewayRestApi#endpoint_access_mode}.

---

##### `EndpointConfiguration`<sup>Optional</sup> <a name="EndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.endpointConfiguration"></a>

```go
EndpointConfiguration ApigatewayRestApiEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration">ApigatewayRestApiEndpointConfiguration</a>

A list of the endpoint types and IP address types of the API.

Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the `Parameters` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#endpoint_configuration ApigatewayRestApi#endpoint_configuration}

---

##### `FailOnWarnings`<sup>Optional</sup> <a name="FailOnWarnings" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.failOnWarnings"></a>

```go
FailOnWarnings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#fail_on_warnings ApigatewayRestApi#fail_on_warnings}.

---

##### `MinimumCompressionSize`<sup>Optional</sup> <a name="MinimumCompressionSize" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.minimumCompressionSize"></a>

```go
MinimumCompressionSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#minimum_compression_size ApigatewayRestApi#minimum_compression_size}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

This property applies only when you use OpenAPI to define your REST API.

The `Mode` determines how API Gateway handles resource updates.
Valid values are `overwrite` or `merge`.
For `overwrite`, the new API definition replaces the existing one. The existing API identifier remains unchanged.
For `merge`, the new API definition is merged with the existing API.
If you don't specify this property, a default value is chosen. For REST APIs created before March 29, 2021, the default is `overwrite`. For REST APIs created after March 29, 2021, the new API definition takes precedence, but any container types such as endpoint configurations and binary media types are merged with the existing API.
Use the default mode to define top-level `RestApi` properties in addition to using OpenAPI. Generally, it's preferred to use API Gateway's OpenAPI extensions to model these properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#mode ApigatewayRestApi#mode}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the RestApi.

A name is required if the REST API is not based on an OpenAPI specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#name ApigatewayRestApi#name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#parameters ApigatewayRestApi#parameters}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

A policy document that contains the permissions for the ``RestApi`` resource.

To set the ARN for the policy, use the `!Join` intrinsic function with `""` as delimiter and values of `"execute-api:/"` and `"*"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#policy ApigatewayRestApi#policy}

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.securityPolicy"></a>

```go
SecurityPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#security_policy ApigatewayRestApi#security_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#tags ApigatewayRestApi#tags}.

---

### ApigatewayRestApiEndpointConfiguration <a name="ApigatewayRestApiEndpointConfiguration" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayrestapi"

&apigatewayrestapi.ApigatewayRestApiEndpointConfiguration {
	IpAddressType: *string,
	Types: *[]*string,
	VpcEndpointIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#ip_address_type ApigatewayRestApi#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.types">Types</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#types ApigatewayRestApi#types}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.vpcEndpointIds">VpcEndpointIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#vpc_endpoint_ids ApigatewayRestApi#vpc_endpoint_ids}. |

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#ip_address_type ApigatewayRestApi#ip_address_type}.

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.types"></a>

```go
Types *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#types ApigatewayRestApi#types}.

---

##### `VpcEndpointIds`<sup>Optional</sup> <a name="VpcEndpointIds" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

```go
VpcEndpointIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#vpc_endpoint_ids ApigatewayRestApi#vpc_endpoint_ids}.

---

### ApigatewayRestApiTags <a name="ApigatewayRestApiTags" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayrestapi"

&apigatewayrestapi.ApigatewayRestApiTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.key">Key</a></code> | <code>*string</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.value">Value</a></code> | <code>*string</code> | The value for the specified tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#key ApigatewayRestApi#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_rest_api#value ApigatewayRestApi#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayRestApiBodyS3LocationOutputReference <a name="ApigatewayRestApiBodyS3LocationOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayrestapi"

apigatewayrestapi.NewApigatewayRestApiBodyS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigatewayRestApiBodyS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetETag">ResetETag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetETag` <a name="ResetETag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetETag"></a>

```go
func ResetETag()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTagInput">ETagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTag">ETag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `ETagInput`<sup>Optional</sup> <a name="ETagInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTagInput"></a>

```go
func ETagInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ETag`<sup>Required</sup> <a name="ETag" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.eTag"></a>

```go
func ETag() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiBodyS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayRestApiEndpointConfigurationOutputReference <a name="ApigatewayRestApiEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayrestapi"

apigatewayrestapi.NewApigatewayRestApiEndpointConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigatewayRestApiEndpointConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetTypes">ResetTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds">ResetVpcEndpointIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetTypes` <a name="ResetTypes" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetTypes"></a>

```go
func ResetTypes()
```

##### `ResetVpcEndpointIds` <a name="ResetVpcEndpointIds" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds"></a>

```go
func ResetVpcEndpointIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.typesInput">TypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput">VpcEndpointIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.types">Types</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">VpcEndpointIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.typesInput"></a>

```go
func TypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointIdsInput`<sup>Optional</sup> <a name="VpcEndpointIdsInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput"></a>

```go
func VpcEndpointIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```go
func Types() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointIds`<sup>Required</sup> <a name="VpcEndpointIds" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```go
func VpcEndpointIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayRestApiTagsList <a name="ApigatewayRestApiTagsList" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayrestapi"

apigatewayrestapi.NewApigatewayRestApiTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigatewayRestApiTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get"></a>

```go
func Get(index *f64) ApigatewayRestApiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayRestApiTagsOutputReference <a name="ApigatewayRestApiTagsOutputReference" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayrestapi"

apigatewayrestapi.NewApigatewayRestApiTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigatewayRestApiTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayRestApi.ApigatewayRestApiTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



