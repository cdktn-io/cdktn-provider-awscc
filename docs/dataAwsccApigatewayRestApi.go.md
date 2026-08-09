# `dataAwsccApigatewayRestApi` Submodule <a name="`dataAwsccApigatewayRestApi` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayRestApi <a name="DataAwsccApigatewayRestApi" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_rest_api awscc_apigateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayrestapi"

dataawsccapigatewayrestapi.NewDataAwsccApigatewayRestApi(scope Construct, id *string, config DataAwsccApigatewayRestApiConfig) DataAwsccApigatewayRestApi
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig">DataAwsccApigatewayRestApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig">DataAwsccApigatewayRestApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayRestApi resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayrestapi"

dataawsccapigatewayrestapi.DataAwsccApigatewayRestApi_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayrestapi"

dataawsccapigatewayrestapi.DataAwsccApigatewayRestApi_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayrestapi"

dataawsccapigatewayrestapi.DataAwsccApigatewayRestApi_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayrestapi"

dataawsccapigatewayrestapi.DataAwsccApigatewayRestApi_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccApigatewayRestApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccApigatewayRestApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccApigatewayRestApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_rest_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayRestApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.apiKeySourceType">ApiKeySourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.binaryMediaTypes">BinaryMediaTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.bodyS3Location">BodyS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference">DataAwsccApigatewayRestApiBodyS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.cloneFrom">CloneFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference">DataAwsccApigatewayRestApiEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.failOnWarnings">FailOnWarnings</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.minimumCompressionSize">MinimumCompressionSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.restApiId">RestApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.rootResourceId">RootResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList">DataAwsccApigatewayRestApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApiKeySourceType`<sup>Required</sup> <a name="ApiKeySourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.apiKeySourceType"></a>

```go
func ApiKeySourceType() *string
```

- *Type:* *string

---

##### `BinaryMediaTypes`<sup>Required</sup> <a name="BinaryMediaTypes" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.binaryMediaTypes"></a>

```go
func BinaryMediaTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `BodyS3Location`<sup>Required</sup> <a name="BodyS3Location" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.bodyS3Location"></a>

```go
func BodyS3Location() DataAwsccApigatewayRestApiBodyS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference">DataAwsccApigatewayRestApiBodyS3LocationOutputReference</a>

---

##### `CloneFrom`<sup>Required</sup> <a name="CloneFrom" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.cloneFrom"></a>

```go
func CloneFrom() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableExecuteApiEndpoint`<sup>Required</sup> <a name="DisableExecuteApiEndpoint" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.disableExecuteApiEndpoint"></a>

```go
func DisableExecuteApiEndpoint() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EndpointAccessMode`<sup>Required</sup> <a name="EndpointAccessMode" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.endpointAccessMode"></a>

```go
func EndpointAccessMode() *string
```

- *Type:* *string

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.endpointConfiguration"></a>

```go
func EndpointConfiguration() DataAwsccApigatewayRestApiEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference">DataAwsccApigatewayRestApiEndpointConfigurationOutputReference</a>

---

##### `FailOnWarnings`<sup>Required</sup> <a name="FailOnWarnings" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.failOnWarnings"></a>

```go
func FailOnWarnings() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MinimumCompressionSize`<sup>Required</sup> <a name="MinimumCompressionSize" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.minimumCompressionSize"></a>

```go
func MinimumCompressionSize() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.restApiId"></a>

```go
func RestApiId() *string
```

- *Type:* *string

---

##### `RootResourceId`<sup>Required</sup> <a name="RootResourceId" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.rootResourceId"></a>

```go
func RootResourceId() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.tags"></a>

```go
func Tags() DataAwsccApigatewayRestApiTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList">DataAwsccApigatewayRestApiTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApi.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayRestApiBodyS3Location <a name="DataAwsccApigatewayRestApiBodyS3Location" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayrestapi"

&dataawsccapigatewayrestapi.DataAwsccApigatewayRestApiBodyS3Location {

}
```


### DataAwsccApigatewayRestApiConfig <a name="DataAwsccApigatewayRestApiConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayrestapi"

&dataawsccapigatewayrestapi.DataAwsccApigatewayRestApiConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_rest_api#id DataAwsccApigatewayRestApi#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayRestApiEndpointConfiguration <a name="DataAwsccApigatewayRestApiEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayrestapi"

&dataawsccapigatewayrestapi.DataAwsccApigatewayRestApiEndpointConfiguration {

}
```


### DataAwsccApigatewayRestApiTags <a name="DataAwsccApigatewayRestApiTags" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayrestapi"

&dataawsccapigatewayrestapi.DataAwsccApigatewayRestApiTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayRestApiBodyS3LocationOutputReference <a name="DataAwsccApigatewayRestApiBodyS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayrestapi"

dataawsccapigatewayrestapi.NewDataAwsccApigatewayRestApiBodyS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApigatewayRestApiBodyS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.eTag">ETag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3Location">DataAwsccApigatewayRestApiBodyS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ETag`<sup>Required</sup> <a name="ETag" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.eTag"></a>

```go
func ETag() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayRestApiBodyS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiBodyS3Location">DataAwsccApigatewayRestApiBodyS3Location</a>

---


### DataAwsccApigatewayRestApiEndpointConfigurationOutputReference <a name="DataAwsccApigatewayRestApiEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayrestapi"

dataawsccapigatewayrestapi.NewDataAwsccApigatewayRestApiEndpointConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApigatewayRestApiEndpointConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.types">Types</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">VpcEndpointIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfiguration">DataAwsccApigatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```go
func Types() *[]*string
```

- *Type:* *[]*string

---

##### `VpcEndpointIds`<sup>Required</sup> <a name="VpcEndpointIds" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```go
func VpcEndpointIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayRestApiEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiEndpointConfiguration">DataAwsccApigatewayRestApiEndpointConfiguration</a>

---


### DataAwsccApigatewayRestApiTagsList <a name="DataAwsccApigatewayRestApiTagsList" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayrestapi"

dataawsccapigatewayrestapi.NewDataAwsccApigatewayRestApiTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApigatewayRestApiTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.get"></a>

```go
func Get(index *f64) DataAwsccApigatewayRestApiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApigatewayRestApiTagsOutputReference <a name="DataAwsccApigatewayRestApiTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayrestapi"

dataawsccapigatewayrestapi.NewDataAwsccApigatewayRestApiTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApigatewayRestApiTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTags">DataAwsccApigatewayRestApiTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayRestApiTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayRestApi.DataAwsccApigatewayRestApiTags">DataAwsccApigatewayRestApiTags</a>

---



