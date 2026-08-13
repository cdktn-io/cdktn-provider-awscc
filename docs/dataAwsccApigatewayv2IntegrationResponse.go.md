# `dataAwsccApigatewayv2IntegrationResponse` Submodule <a name="`dataAwsccApigatewayv2IntegrationResponse` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayv2IntegrationResponse <a name="DataAwsccApigatewayv2IntegrationResponse" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigatewayv2_integration_response awscc_apigatewayv2_integration_response}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integrationresponse"

dataawsccapigatewayv2integrationresponse.NewDataAwsccApigatewayv2IntegrationResponse(scope Construct, id *string, config DataAwsccApigatewayv2IntegrationResponseConfig) DataAwsccApigatewayv2IntegrationResponse
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig">DataAwsccApigatewayv2IntegrationResponseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig">DataAwsccApigatewayv2IntegrationResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayv2IntegrationResponse resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integrationresponse"

dataawsccapigatewayv2integrationresponse.DataAwsccApigatewayv2IntegrationResponse_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integrationresponse"

dataawsccapigatewayv2integrationresponse.DataAwsccApigatewayv2IntegrationResponse_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integrationresponse"

dataawsccapigatewayv2integrationresponse.DataAwsccApigatewayv2IntegrationResponse_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integrationresponse"

dataawsccapigatewayv2integrationresponse.DataAwsccApigatewayv2IntegrationResponse_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccApigatewayv2IntegrationResponse resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccApigatewayv2IntegrationResponse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccApigatewayv2IntegrationResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigatewayv2_integration_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayv2IntegrationResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.contentHandlingStrategy">ContentHandlingStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.integrationResponseId">IntegrationResponseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.integrationResponseKey">IntegrationResponseKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.responseParameters">ResponseParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.responseTemplates">ResponseTemplates</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.templateSelectionExpression">TemplateSelectionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `ContentHandlingStrategy`<sup>Required</sup> <a name="ContentHandlingStrategy" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.contentHandlingStrategy"></a>

```go
func ContentHandlingStrategy() *string
```

- *Type:* *string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `IntegrationResponseId`<sup>Required</sup> <a name="IntegrationResponseId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.integrationResponseId"></a>

```go
func IntegrationResponseId() *string
```

- *Type:* *string

---

##### `IntegrationResponseKey`<sup>Required</sup> <a name="IntegrationResponseKey" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.integrationResponseKey"></a>

```go
func IntegrationResponseKey() *string
```

- *Type:* *string

---

##### `ResponseParameters`<sup>Required</sup> <a name="ResponseParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.responseParameters"></a>

```go
func ResponseParameters() *string
```

- *Type:* *string

---

##### `ResponseTemplates`<sup>Required</sup> <a name="ResponseTemplates" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.responseTemplates"></a>

```go
func ResponseTemplates() *string
```

- *Type:* *string

---

##### `TemplateSelectionExpression`<sup>Required</sup> <a name="TemplateSelectionExpression" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.templateSelectionExpression"></a>

```go
func TemplateSelectionExpression() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponse.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayv2IntegrationResponseConfig <a name="DataAwsccApigatewayv2IntegrationResponseConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2integrationresponse"

&dataawsccapigatewayv2integrationresponse.DataAwsccApigatewayv2IntegrationResponseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2IntegrationResponse.DataAwsccApigatewayv2IntegrationResponseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigatewayv2_integration_response#id DataAwsccApigatewayv2IntegrationResponse#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



