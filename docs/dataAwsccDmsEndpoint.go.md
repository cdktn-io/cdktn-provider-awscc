# `dataAwsccDmsEndpoint` Submodule <a name="`dataAwsccDmsEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDmsEndpoint <a name="DataAwsccDmsEndpoint" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dms_endpoint awscc_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpoint(scope Construct, id *string, config DataAwsccDmsEndpointConfig) DataAwsccDmsEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig">DataAwsccDmsEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig">DataAwsccDmsEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDmsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.DataAwsccDmsEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.DataAwsccDmsEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.DataAwsccDmsEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.DataAwsccDmsEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDmsEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDmsEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.docDbSettings">DocDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference">DataAwsccDmsEndpointDocDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dynamoDbSettings">DynamoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference">DataAwsccDmsEndpointDynamoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.elasticsearchSettings">ElasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference">DataAwsccDmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointArn">EndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointIdentifier">EndpointIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.engineName">EngineName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.extraConnectionAttributes">ExtraConnectionAttributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.gcpMySqlSettings">GcpMySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference">DataAwsccDmsEndpointGcpMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.ibmDb2Settings">IbmDb2Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference">DataAwsccDmsEndpointIbmDb2SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kafkaSettings">KafkaSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference">DataAwsccDmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kinesisSettings">KinesisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference">DataAwsccDmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.microsoftSqlServerSettings">MicrosoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference">DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mongoDbSettings">MongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference">DataAwsccDmsEndpointMongoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mySqlSettings">MySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference">DataAwsccDmsEndpointMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.neptuneSettings">NeptuneSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference">DataAwsccDmsEndpointNeptuneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.oracleSettings">OracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference">DataAwsccDmsEndpointOracleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.postgreSqlSettings">PostgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference">DataAwsccDmsEndpointPostgreSqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redisSettings">RedisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference">DataAwsccDmsEndpointRedisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference">DataAwsccDmsEndpointRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.s3Settings">S3Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference">DataAwsccDmsEndpointS3SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sybaseSettings">SybaseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference">DataAwsccDmsEndpointSybaseSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList">DataAwsccDmsEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DocDbSettings`<sup>Required</sup> <a name="DocDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.docDbSettings"></a>

```go
func DocDbSettings() DataAwsccDmsEndpointDocDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference">DataAwsccDmsEndpointDocDbSettingsOutputReference</a>

---

##### `DynamoDbSettings`<sup>Required</sup> <a name="DynamoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.dynamoDbSettings"></a>

```go
func DynamoDbSettings() DataAwsccDmsEndpointDynamoDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference">DataAwsccDmsEndpointDynamoDbSettingsOutputReference</a>

---

##### `ElasticsearchSettings`<sup>Required</sup> <a name="ElasticsearchSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.elasticsearchSettings"></a>

```go
func ElasticsearchSettings() DataAwsccDmsEndpointElasticsearchSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference">DataAwsccDmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointArn"></a>

```go
func EndpointArn() *string
```

- *Type:* *string

---

##### `EndpointIdentifier`<sup>Required</sup> <a name="EndpointIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointIdentifier"></a>

```go
func EndpointIdentifier() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.engineName"></a>

```go
func EngineName() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `ExtraConnectionAttributes`<sup>Required</sup> <a name="ExtraConnectionAttributes" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.extraConnectionAttributes"></a>

```go
func ExtraConnectionAttributes() *string
```

- *Type:* *string

---

##### `GcpMySqlSettings`<sup>Required</sup> <a name="GcpMySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.gcpMySqlSettings"></a>

```go
func GcpMySqlSettings() DataAwsccDmsEndpointGcpMySqlSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference">DataAwsccDmsEndpointGcpMySqlSettingsOutputReference</a>

---

##### `IbmDb2Settings`<sup>Required</sup> <a name="IbmDb2Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.ibmDb2Settings"></a>

```go
func IbmDb2Settings() DataAwsccDmsEndpointIbmDb2SettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference">DataAwsccDmsEndpointIbmDb2SettingsOutputReference</a>

---

##### `KafkaSettings`<sup>Required</sup> <a name="KafkaSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kafkaSettings"></a>

```go
func KafkaSettings() DataAwsccDmsEndpointKafkaSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference">DataAwsccDmsEndpointKafkaSettingsOutputReference</a>

---

##### `KinesisSettings`<sup>Required</sup> <a name="KinesisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kinesisSettings"></a>

```go
func KinesisSettings() DataAwsccDmsEndpointKinesisSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference">DataAwsccDmsEndpointKinesisSettingsOutputReference</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `MicrosoftSqlServerSettings`<sup>Required</sup> <a name="MicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.microsoftSqlServerSettings"></a>

```go
func MicrosoftSqlServerSettings() DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference">DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference</a>

---

##### `MongoDbSettings`<sup>Required</sup> <a name="MongoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mongoDbSettings"></a>

```go
func MongoDbSettings() DataAwsccDmsEndpointMongoDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference">DataAwsccDmsEndpointMongoDbSettingsOutputReference</a>

---

##### `MySqlSettings`<sup>Required</sup> <a name="MySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.mySqlSettings"></a>

```go
func MySqlSettings() DataAwsccDmsEndpointMySqlSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference">DataAwsccDmsEndpointMySqlSettingsOutputReference</a>

---

##### `NeptuneSettings`<sup>Required</sup> <a name="NeptuneSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.neptuneSettings"></a>

```go
func NeptuneSettings() DataAwsccDmsEndpointNeptuneSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference">DataAwsccDmsEndpointNeptuneSettingsOutputReference</a>

---

##### `OracleSettings`<sup>Required</sup> <a name="OracleSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.oracleSettings"></a>

```go
func OracleSettings() DataAwsccDmsEndpointOracleSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference">DataAwsccDmsEndpointOracleSettingsOutputReference</a>

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PostgreSqlSettings`<sup>Required</sup> <a name="PostgreSqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.postgreSqlSettings"></a>

```go
func PostgreSqlSettings() DataAwsccDmsEndpointPostgreSqlSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference">DataAwsccDmsEndpointPostgreSqlSettingsOutputReference</a>

---

##### `RedisSettings`<sup>Required</sup> <a name="RedisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redisSettings"></a>

```go
func RedisSettings() DataAwsccDmsEndpointRedisSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference">DataAwsccDmsEndpointRedisSettingsOutputReference</a>

---

##### `RedshiftSettings`<sup>Required</sup> <a name="RedshiftSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.redshiftSettings"></a>

```go
func RedshiftSettings() DataAwsccDmsEndpointRedshiftSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference">DataAwsccDmsEndpointRedshiftSettingsOutputReference</a>

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.resourceIdentifier"></a>

```go
func ResourceIdentifier() *string
```

- *Type:* *string

---

##### `S3Settings`<sup>Required</sup> <a name="S3Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.s3Settings"></a>

```go
func S3Settings() DataAwsccDmsEndpointS3SettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference">DataAwsccDmsEndpointS3SettingsOutputReference</a>

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `SybaseSettings`<sup>Required</sup> <a name="SybaseSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.sybaseSettings"></a>

```go
func SybaseSettings() DataAwsccDmsEndpointSybaseSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference">DataAwsccDmsEndpointSybaseSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tags"></a>

```go
func Tags() DataAwsccDmsEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList">DataAwsccDmsEndpointTagsList</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDmsEndpointConfig <a name="DataAwsccDmsEndpointConfig" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dms_endpoint#id DataAwsccDmsEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDmsEndpointDocDbSettings <a name="DataAwsccDmsEndpointDocDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointDocDbSettings {

}
```


### DataAwsccDmsEndpointDynamoDbSettings <a name="DataAwsccDmsEndpointDynamoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointDynamoDbSettings {

}
```


### DataAwsccDmsEndpointElasticsearchSettings <a name="DataAwsccDmsEndpointElasticsearchSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointElasticsearchSettings {

}
```


### DataAwsccDmsEndpointGcpMySqlSettings <a name="DataAwsccDmsEndpointGcpMySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointGcpMySqlSettings {

}
```


### DataAwsccDmsEndpointIbmDb2Settings <a name="DataAwsccDmsEndpointIbmDb2Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointIbmDb2Settings {

}
```


### DataAwsccDmsEndpointKafkaSettings <a name="DataAwsccDmsEndpointKafkaSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointKafkaSettings {

}
```


### DataAwsccDmsEndpointKinesisSettings <a name="DataAwsccDmsEndpointKinesisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointKinesisSettings {

}
```


### DataAwsccDmsEndpointMicrosoftSqlServerSettings <a name="DataAwsccDmsEndpointMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings {

}
```


### DataAwsccDmsEndpointMongoDbSettings <a name="DataAwsccDmsEndpointMongoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointMongoDbSettings {

}
```


### DataAwsccDmsEndpointMySqlSettings <a name="DataAwsccDmsEndpointMySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointMySqlSettings {

}
```


### DataAwsccDmsEndpointNeptuneSettings <a name="DataAwsccDmsEndpointNeptuneSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointNeptuneSettings {

}
```


### DataAwsccDmsEndpointOracleSettings <a name="DataAwsccDmsEndpointOracleSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointOracleSettings {

}
```


### DataAwsccDmsEndpointPostgreSqlSettings <a name="DataAwsccDmsEndpointPostgreSqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointPostgreSqlSettings {

}
```


### DataAwsccDmsEndpointRedisSettings <a name="DataAwsccDmsEndpointRedisSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointRedisSettings {

}
```


### DataAwsccDmsEndpointRedshiftSettings <a name="DataAwsccDmsEndpointRedshiftSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointRedshiftSettings {

}
```


### DataAwsccDmsEndpointS3Settings <a name="DataAwsccDmsEndpointS3Settings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointS3Settings {

}
```


### DataAwsccDmsEndpointSybaseSettings <a name="DataAwsccDmsEndpointSybaseSettings" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointSybaseSettings {

}
```


### DataAwsccDmsEndpointTags <a name="DataAwsccDmsEndpointTags" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

&dataawsccdmsendpoint.DataAwsccDmsEndpointTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDmsEndpointDocDbSettingsOutputReference <a name="DataAwsccDmsEndpointDocDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointDocDbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointDocDbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.extractDocId">ExtractDocId</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.nestingLevel">NestingLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings">DataAwsccDmsEndpointDocDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocsToInvestigate`<sup>Required</sup> <a name="DocsToInvestigate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate"></a>

```go
func DocsToInvestigate() *f64
```

- *Type:* *f64

---

##### `ExtractDocId`<sup>Required</sup> <a name="ExtractDocId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.extractDocId"></a>

```go
func ExtractDocId() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NestingLevel`<sup>Required</sup> <a name="NestingLevel" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.nestingLevel"></a>

```go
func NestingLevel() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointDocDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDocDbSettings">DataAwsccDmsEndpointDocDbSettings</a>

---


### DataAwsccDmsEndpointDynamoDbSettingsOutputReference <a name="DataAwsccDmsEndpointDynamoDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointDynamoDbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointDynamoDbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings">DataAwsccDmsEndpointDynamoDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointDynamoDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointDynamoDbSettings">DataAwsccDmsEndpointDynamoDbSettings</a>

---


### DataAwsccDmsEndpointElasticsearchSettingsOutputReference <a name="DataAwsccDmsEndpointElasticsearchSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointElasticsearchSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointElasticsearchSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">EndpointUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">FullLoadErrorPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings">DataAwsccDmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```go
func EndpointUri() *string
```

- *Type:* *string

---

##### `ErrorRetryDuration`<sup>Required</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```go
func ErrorRetryDuration() *f64
```

- *Type:* *f64

---

##### `FullLoadErrorPercentage`<sup>Required</sup> <a name="FullLoadErrorPercentage" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```go
func FullLoadErrorPercentage() *f64
```

- *Type:* *f64

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointElasticsearchSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointElasticsearchSettings">DataAwsccDmsEndpointElasticsearchSettings</a>

---


### DataAwsccDmsEndpointGcpMySqlSettingsOutputReference <a name="DataAwsccDmsEndpointGcpMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointGcpMySqlSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointGcpMySqlSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval">EventsPollInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone">ServerTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings">DataAwsccDmsEndpointGcpMySqlSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript"></a>

```go
func AfterConnectScript() *string
```

- *Type:* *string

---

##### `CleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```go
func CleanSourceMetadataOnMismatch() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `EventsPollInterval`<sup>Required</sup> <a name="EventsPollInterval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```go
func EventsPollInterval() *f64
```

- *Type:* *f64

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `ParallelLoadThreads`<sup>Required</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```go
func ParallelLoadThreads() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `ServerTimezone`<sup>Required</sup> <a name="ServerTimezone" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone"></a>

```go
func ServerTimezone() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointGcpMySqlSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointGcpMySqlSettings">DataAwsccDmsEndpointGcpMySqlSettings</a>

---


### DataAwsccDmsEndpointIbmDb2SettingsOutputReference <a name="DataAwsccDmsEndpointIbmDb2SettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointIbmDb2SettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointIbmDb2SettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.currentLsn">CurrentLsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles">KeepCsvFiles</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout">LoadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead">MaxKBytesPerRead</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges">SetDataCaptureChanges</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize">WriteBufferSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings">DataAwsccDmsEndpointIbmDb2Settings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentLsn`<sup>Required</sup> <a name="CurrentLsn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.currentLsn"></a>

```go
func CurrentLsn() *string
```

- *Type:* *string

---

##### `KeepCsvFiles`<sup>Required</sup> <a name="KeepCsvFiles" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles"></a>

```go
func KeepCsvFiles() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LoadTimeout`<sup>Required</sup> <a name="LoadTimeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout"></a>

```go
func LoadTimeout() *f64
```

- *Type:* *f64

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `MaxKBytesPerRead`<sup>Required</sup> <a name="MaxKBytesPerRead" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead"></a>

```go
func MaxKBytesPerRead() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `SetDataCaptureChanges`<sup>Required</sup> <a name="SetDataCaptureChanges" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges"></a>

```go
func SetDataCaptureChanges() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `WriteBufferSize`<sup>Required</sup> <a name="WriteBufferSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize"></a>

```go
func WriteBufferSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2SettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointIbmDb2Settings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointIbmDb2Settings">DataAwsccDmsEndpointIbmDb2Settings</a>

---


### DataAwsccDmsEndpointKafkaSettingsOutputReference <a name="DataAwsccDmsEndpointKafkaSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointKafkaSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointKafkaSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.broker">Broker</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">NoHexPrefix</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslPassword">SaslPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslUserName">SaslUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.securityProtocol">SecurityProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">SslClientCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">SslClientKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">SslClientKeyPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings">DataAwsccDmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Broker`<sup>Required</sup> <a name="Broker" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```go
func Broker() *string
```

- *Type:* *string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```go
func IncludeControlDetails() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```go
func IncludeNullAndEmpty() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```go
func IncludePartitionValue() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```go
func IncludeTableAlterOperations() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```go
func IncludeTransactionDetails() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```go
func MessageFormat() *string
```

- *Type:* *string

---

##### `MessageMaxBytes`<sup>Required</sup> <a name="MessageMaxBytes" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```go
func MessageMaxBytes() *f64
```

- *Type:* *f64

---

##### `NoHexPrefix`<sup>Required</sup> <a name="NoHexPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```go
func NoHexPrefix() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```go
func PartitionIncludeSchemaTable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SaslPassword`<sup>Required</sup> <a name="SaslPassword" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```go
func SaslPassword() *string
```

- *Type:* *string

---

##### `SaslUserName`<sup>Required</sup> <a name="SaslUserName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.saslUserName"></a>

```go
func SaslUserName() *string
```

- *Type:* *string

---

##### `SecurityProtocol`<sup>Required</sup> <a name="SecurityProtocol" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```go
func SecurityProtocol() *string
```

- *Type:* *string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```go
func SslCaCertificateArn() *string
```

- *Type:* *string

---

##### `SslClientCertificateArn`<sup>Required</sup> <a name="SslClientCertificateArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```go
func SslClientCertificateArn() *string
```

- *Type:* *string

---

##### `SslClientKeyArn`<sup>Required</sup> <a name="SslClientKeyArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```go
func SslClientKeyArn() *string
```

- *Type:* *string

---

##### `SslClientKeyPassword`<sup>Required</sup> <a name="SslClientKeyPassword" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```go
func SslClientKeyPassword() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointKafkaSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKafkaSettings">DataAwsccDmsEndpointKafkaSettings</a>

---


### DataAwsccDmsEndpointKinesisSettingsOutputReference <a name="DataAwsccDmsEndpointKinesisSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointKinesisSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointKinesisSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.noHexPrefix">NoHexPrefix</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings">DataAwsccDmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```go
func IncludeControlDetails() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```go
func IncludeNullAndEmpty() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```go
func IncludePartitionValue() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```go
func IncludeTableAlterOperations() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```go
func IncludeTransactionDetails() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```go
func MessageFormat() *string
```

- *Type:* *string

---

##### `NoHexPrefix`<sup>Required</sup> <a name="NoHexPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.noHexPrefix"></a>

```go
func NoHexPrefix() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```go
func PartitionIncludeSchemaTable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointKinesisSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointKinesisSettings">DataAwsccDmsEndpointKinesisSettings</a>

---


### DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference <a name="DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize">BcpPacketSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup">ControlTablesFileGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup">ForceLobLookup</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode">QuerySingleAlwaysOnNode</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly">ReadBackupOnly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy">SafeguardPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode">TlogAccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar">TrimSpaceInChar</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad">UseBcpFullLoad</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice">UseThirdPartyBackupDevice</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings">DataAwsccDmsEndpointMicrosoftSqlServerSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BcpPacketSize`<sup>Required</sup> <a name="BcpPacketSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize"></a>

```go
func BcpPacketSize() *f64
```

- *Type:* *f64

---

##### `ControlTablesFileGroup`<sup>Required</sup> <a name="ControlTablesFileGroup" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup"></a>

```go
func ControlTablesFileGroup() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `ForceLobLookup`<sup>Required</sup> <a name="ForceLobLookup" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup"></a>

```go
func ForceLobLookup() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `QuerySingleAlwaysOnNode`<sup>Required</sup> <a name="QuerySingleAlwaysOnNode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode"></a>

```go
func QuerySingleAlwaysOnNode() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ReadBackupOnly`<sup>Required</sup> <a name="ReadBackupOnly" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly"></a>

```go
func ReadBackupOnly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SafeguardPolicy`<sup>Required</sup> <a name="SafeguardPolicy" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy"></a>

```go
func SafeguardPolicy() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `TlogAccessMode`<sup>Required</sup> <a name="TlogAccessMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode"></a>

```go
func TlogAccessMode() *string
```

- *Type:* *string

---

##### `TrimSpaceInChar`<sup>Required</sup> <a name="TrimSpaceInChar" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar"></a>

```go
func TrimSpaceInChar() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseBcpFullLoad`<sup>Required</sup> <a name="UseBcpFullLoad" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad"></a>

```go
func UseBcpFullLoad() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UseThirdPartyBackupDevice`<sup>Required</sup> <a name="UseThirdPartyBackupDevice" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice"></a>

```go
func UseThirdPartyBackupDevice() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointMicrosoftSqlServerSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMicrosoftSqlServerSettings">DataAwsccDmsEndpointMicrosoftSqlServerSettings</a>

---


### DataAwsccDmsEndpointMongoDbSettingsOutputReference <a name="DataAwsccDmsEndpointMongoDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointMongoDbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointMongoDbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authMechanism">AuthMechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authSource">AuthSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.extractDocId">ExtractDocId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.nestingLevel">NestingLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings">DataAwsccDmsEndpointMongoDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthMechanism`<sup>Required</sup> <a name="AuthMechanism" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authMechanism"></a>

```go
func AuthMechanism() *string
```

- *Type:* *string

---

##### `AuthSource`<sup>Required</sup> <a name="AuthSource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authSource"></a>

```go
func AuthSource() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DocsToInvestigate`<sup>Required</sup> <a name="DocsToInvestigate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate"></a>

```go
func DocsToInvestigate() *string
```

- *Type:* *string

---

##### `ExtractDocId`<sup>Required</sup> <a name="ExtractDocId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.extractDocId"></a>

```go
func ExtractDocId() *string
```

- *Type:* *string

---

##### `NestingLevel`<sup>Required</sup> <a name="NestingLevel" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.nestingLevel"></a>

```go
func NestingLevel() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointMongoDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMongoDbSettings">DataAwsccDmsEndpointMongoDbSettings</a>

---


### DataAwsccDmsEndpointMySqlSettingsOutputReference <a name="DataAwsccDmsEndpointMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointMySqlSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointMySqlSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval">EventsPollInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.serverTimezone">ServerTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.targetDbType">TargetDbType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings">DataAwsccDmsEndpointMySqlSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.afterConnectScript"></a>

```go
func AfterConnectScript() *string
```

- *Type:* *string

---

##### `CleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```go
func CleanSourceMetadataOnMismatch() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EventsPollInterval`<sup>Required</sup> <a name="EventsPollInterval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```go
func EventsPollInterval() *f64
```

- *Type:* *f64

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `ParallelLoadThreads`<sup>Required</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```go
func ParallelLoadThreads() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `ServerTimezone`<sup>Required</sup> <a name="ServerTimezone" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.serverTimezone"></a>

```go
func ServerTimezone() *string
```

- *Type:* *string

---

##### `TargetDbType`<sup>Required</sup> <a name="TargetDbType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.targetDbType"></a>

```go
func TargetDbType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointMySqlSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointMySqlSettings">DataAwsccDmsEndpointMySqlSettings</a>

---


### DataAwsccDmsEndpointNeptuneSettingsOutputReference <a name="DataAwsccDmsEndpointNeptuneSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointNeptuneSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointNeptuneSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled">IamAuthEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount">MaxRetryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder">S3BucketFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings">DataAwsccDmsEndpointNeptuneSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorRetryDuration`<sup>Required</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration"></a>

```go
func ErrorRetryDuration() *f64
```

- *Type:* *f64

---

##### `IamAuthEnabled`<sup>Required</sup> <a name="IamAuthEnabled" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled"></a>

```go
func IamAuthEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `MaxRetryCount`<sup>Required</sup> <a name="MaxRetryCount" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount"></a>

```go
func MaxRetryCount() *f64
```

- *Type:* *f64

---

##### `S3BucketFolder`<sup>Required</sup> <a name="S3BucketFolder" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder"></a>

```go
func S3BucketFolder() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointNeptuneSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointNeptuneSettings">DataAwsccDmsEndpointNeptuneSettings</a>

---


### DataAwsccDmsEndpointOracleSettingsOutputReference <a name="DataAwsccDmsEndpointOracleSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointOracleSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointOracleSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly">AccessAlternateDirectly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId">AdditionalArchivedLogDestId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging">AddSupplementalLogging</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables">AllowSelectNestedTables</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogDestId">ArchivedLogDestId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly">ArchivedLogsOnly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmPassword">AsmPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmServer">AsmServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmUser">AsmUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.charLengthSemantics">CharLengthSemantics</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathNoLog">DirectPathNoLog</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad">DirectPathParallelLoad</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace">EnableHomogenousTablespace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds">ExtraArchivedLogDestIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale">NumberDatatypeScale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix">OraclePathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads">ParallelAsmReadThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readAheadBlocks">ReadAheadBlocks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readTableSpaceName">ReadTableSpaceName</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.replacePathPrefix">ReplacePathPrefix</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.retryInterval">RetryInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryption">SecurityDbEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName">SecurityDbEncryptionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName">SpatialDataOptionToGeoJsonFunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.standbyDelayTime">StandbyDelayTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline">UseAlternateFolderForOnline</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useBFile">UseBFile</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad">UseDirectPathFullLoad</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useLogminerReader">UseLogminerReader</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.usePathPrefix">UsePathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings">DataAwsccDmsEndpointOracleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessAlternateDirectly`<sup>Required</sup> <a name="AccessAlternateDirectly" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly"></a>

```go
func AccessAlternateDirectly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AdditionalArchivedLogDestId`<sup>Required</sup> <a name="AdditionalArchivedLogDestId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId"></a>

```go
func AdditionalArchivedLogDestId() *f64
```

- *Type:* *f64

---

##### `AddSupplementalLogging`<sup>Required</sup> <a name="AddSupplementalLogging" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging"></a>

```go
func AddSupplementalLogging() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AllowSelectNestedTables`<sup>Required</sup> <a name="AllowSelectNestedTables" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables"></a>

```go
func AllowSelectNestedTables() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ArchivedLogDestId`<sup>Required</sup> <a name="ArchivedLogDestId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogDestId"></a>

```go
func ArchivedLogDestId() *f64
```

- *Type:* *f64

---

##### `ArchivedLogsOnly`<sup>Required</sup> <a name="ArchivedLogsOnly" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly"></a>

```go
func ArchivedLogsOnly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AsmPassword`<sup>Required</sup> <a name="AsmPassword" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmPassword"></a>

```go
func AsmPassword() *string
```

- *Type:* *string

---

##### `AsmServer`<sup>Required</sup> <a name="AsmServer" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmServer"></a>

```go
func AsmServer() *string
```

- *Type:* *string

---

##### `AsmUser`<sup>Required</sup> <a name="AsmUser" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.asmUser"></a>

```go
func AsmUser() *string
```

- *Type:* *string

---

##### `CharLengthSemantics`<sup>Required</sup> <a name="CharLengthSemantics" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.charLengthSemantics"></a>

```go
func CharLengthSemantics() *string
```

- *Type:* *string

---

##### `DirectPathNoLog`<sup>Required</sup> <a name="DirectPathNoLog" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathNoLog"></a>

```go
func DirectPathNoLog() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DirectPathParallelLoad`<sup>Required</sup> <a name="DirectPathParallelLoad" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad"></a>

```go
func DirectPathParallelLoad() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnableHomogenousTablespace`<sup>Required</sup> <a name="EnableHomogenousTablespace" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace"></a>

```go
func EnableHomogenousTablespace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ExtraArchivedLogDestIds`<sup>Required</sup> <a name="ExtraArchivedLogDestIds" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds"></a>

```go
func ExtraArchivedLogDestIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `FailTasksOnLobTruncation`<sup>Required</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```go
func FailTasksOnLobTruncation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NumberDatatypeScale`<sup>Required</sup> <a name="NumberDatatypeScale" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale"></a>

```go
func NumberDatatypeScale() *f64
```

- *Type:* *f64

---

##### `OraclePathPrefix`<sup>Required</sup> <a name="OraclePathPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix"></a>

```go
func OraclePathPrefix() *string
```

- *Type:* *string

---

##### `ParallelAsmReadThreads`<sup>Required</sup> <a name="ParallelAsmReadThreads" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads"></a>

```go
func ParallelAsmReadThreads() *f64
```

- *Type:* *f64

---

##### `ReadAheadBlocks`<sup>Required</sup> <a name="ReadAheadBlocks" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readAheadBlocks"></a>

```go
func ReadAheadBlocks() *f64
```

- *Type:* *f64

---

##### `ReadTableSpaceName`<sup>Required</sup> <a name="ReadTableSpaceName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.readTableSpaceName"></a>

```go
func ReadTableSpaceName() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ReplacePathPrefix`<sup>Required</sup> <a name="ReplacePathPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.replacePathPrefix"></a>

```go
func ReplacePathPrefix() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RetryInterval`<sup>Required</sup> <a name="RetryInterval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.retryInterval"></a>

```go
func RetryInterval() *f64
```

- *Type:* *f64

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```go
func SecretsManagerOracleAsmAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```go
func SecretsManagerOracleAsmSecretId() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `SecurityDbEncryption`<sup>Required</sup> <a name="SecurityDbEncryption" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryption"></a>

```go
func SecurityDbEncryption() *string
```

- *Type:* *string

---

##### `SecurityDbEncryptionName`<sup>Required</sup> <a name="SecurityDbEncryptionName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName"></a>

```go
func SecurityDbEncryptionName() *string
```

- *Type:* *string

---

##### `SpatialDataOptionToGeoJsonFunctionName`<sup>Required</sup> <a name="SpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName"></a>

```go
func SpatialDataOptionToGeoJsonFunctionName() *string
```

- *Type:* *string

---

##### `StandbyDelayTime`<sup>Required</sup> <a name="StandbyDelayTime" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.standbyDelayTime"></a>

```go
func StandbyDelayTime() *f64
```

- *Type:* *f64

---

##### `UseAlternateFolderForOnline`<sup>Required</sup> <a name="UseAlternateFolderForOnline" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline"></a>

```go
func UseAlternateFolderForOnline() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseBFile`<sup>Required</sup> <a name="UseBFile" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useBFile"></a>

```go
func UseBFile() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseDirectPathFullLoad`<sup>Required</sup> <a name="UseDirectPathFullLoad" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad"></a>

```go
func UseDirectPathFullLoad() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseLogminerReader`<sup>Required</sup> <a name="UseLogminerReader" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.useLogminerReader"></a>

```go
func UseLogminerReader() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UsePathPrefix`<sup>Required</sup> <a name="UsePathPrefix" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.usePathPrefix"></a>

```go
func UsePathPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointOracleSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointOracleSettings">DataAwsccDmsEndpointOracleSettings</a>

---


### DataAwsccDmsEndpointPostgreSqlSettingsOutputReference <a name="DataAwsccDmsEndpointPostgreSqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointPostgreSqlSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointPostgreSqlSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName">BabelfishDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls">CaptureDdls</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode">DatabaseMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema">DdlArtifactsSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout">ExecuteTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable">HeartbeatEnable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency">HeartbeatFrequency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema">HeartbeatSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.slotName">SlotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings">DataAwsccDmsEndpointPostgreSqlSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript"></a>

```go
func AfterConnectScript() *string
```

- *Type:* *string

---

##### `BabelfishDatabaseName`<sup>Required</sup> <a name="BabelfishDatabaseName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName"></a>

```go
func BabelfishDatabaseName() *string
```

- *Type:* *string

---

##### `CaptureDdls`<sup>Required</sup> <a name="CaptureDdls" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls"></a>

```go
func CaptureDdls() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DatabaseMode`<sup>Required</sup> <a name="DatabaseMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode"></a>

```go
func DatabaseMode() *string
```

- *Type:* *string

---

##### `DdlArtifactsSchema`<sup>Required</sup> <a name="DdlArtifactsSchema" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema"></a>

```go
func DdlArtifactsSchema() *string
```

- *Type:* *string

---

##### `ExecuteTimeout`<sup>Required</sup> <a name="ExecuteTimeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout"></a>

```go
func ExecuteTimeout() *f64
```

- *Type:* *f64

---

##### `FailTasksOnLobTruncation`<sup>Required</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```go
func FailTasksOnLobTruncation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `HeartbeatEnable`<sup>Required</sup> <a name="HeartbeatEnable" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable"></a>

```go
func HeartbeatEnable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `HeartbeatFrequency`<sup>Required</sup> <a name="HeartbeatFrequency" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency"></a>

```go
func HeartbeatFrequency() *f64
```

- *Type:* *f64

---

##### `HeartbeatSchema`<sup>Required</sup> <a name="HeartbeatSchema" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema"></a>

```go
func HeartbeatSchema() *string
```

- *Type:* *string

---

##### `MapBooleanAsBoolean`<sup>Required</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```go
func MapBooleanAsBoolean() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `SlotName`<sup>Required</sup> <a name="SlotName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.slotName"></a>

```go
func SlotName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointPostgreSqlSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointPostgreSqlSettings">DataAwsccDmsEndpointPostgreSqlSettings</a>

---


### DataAwsccDmsEndpointRedisSettingsOutputReference <a name="DataAwsccDmsEndpointRedisSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointRedisSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointRedisSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authPassword">AuthPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authUserName">AuthUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">SslSecurityProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings">DataAwsccDmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthPassword`<sup>Required</sup> <a name="AuthPassword" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```go
func AuthPassword() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `AuthUserName`<sup>Required</sup> <a name="AuthUserName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```go
func AuthUserName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```go
func SslCaCertificateArn() *string
```

- *Type:* *string

---

##### `SslSecurityProtocol`<sup>Required</sup> <a name="SslSecurityProtocol" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```go
func SslSecurityProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointRedisSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedisSettings">DataAwsccDmsEndpointRedisSettings</a>

---


### DataAwsccDmsEndpointRedshiftSettingsOutputReference <a name="DataAwsccDmsEndpointRedshiftSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointRedshiftSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointRedshiftSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate">AcceptAnyDate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.compUpdate">CompUpdate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout">ConnectionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.dateFormat">DateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull">EmptyAsNull</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.explicitIds">ExplicitIds</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams">FileTransferUploadStreams</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.loadTimeout">LoadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.removeQuotes">RemoveQuotes</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceChars">ReplaceChars</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars">ReplaceInvalidChars</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.timeFormat">TimeFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.trimBlanks">TrimBlanks</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.truncateColumns">TruncateColumns</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize">WriteBufferSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings">DataAwsccDmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptAnyDate`<sup>Required</sup> <a name="AcceptAnyDate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate"></a>

```go
func AcceptAnyDate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript"></a>

```go
func AfterConnectScript() *string
```

- *Type:* *string

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```go
func BucketFolder() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CaseSensitiveNames`<sup>Required</sup> <a name="CaseSensitiveNames" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames"></a>

```go
func CaseSensitiveNames() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CompUpdate`<sup>Required</sup> <a name="CompUpdate" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.compUpdate"></a>

```go
func CompUpdate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ConnectionTimeout`<sup>Required</sup> <a name="ConnectionTimeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout"></a>

```go
func ConnectionTimeout() *f64
```

- *Type:* *f64

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.dateFormat"></a>

```go
func DateFormat() *string
```

- *Type:* *string

---

##### `EmptyAsNull`<sup>Required</sup> <a name="EmptyAsNull" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull"></a>

```go
func EmptyAsNull() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```go
func EncryptionMode() *string
```

- *Type:* *string

---

##### `ExplicitIds`<sup>Required</sup> <a name="ExplicitIds" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.explicitIds"></a>

```go
func ExplicitIds() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FileTransferUploadStreams`<sup>Required</sup> <a name="FileTransferUploadStreams" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams"></a>

```go
func FileTransferUploadStreams() *f64
```

- *Type:* *f64

---

##### `LoadTimeout`<sup>Required</sup> <a name="LoadTimeout" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.loadTimeout"></a>

```go
func LoadTimeout() *f64
```

- *Type:* *f64

---

##### `MapBooleanAsBoolean`<sup>Required</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```go
func MapBooleanAsBoolean() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `RemoveQuotes`<sup>Required</sup> <a name="RemoveQuotes" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.removeQuotes"></a>

```go
func RemoveQuotes() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ReplaceChars`<sup>Required</sup> <a name="ReplaceChars" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceChars"></a>

```go
func ReplaceChars() *string
```

- *Type:* *string

---

##### `ReplaceInvalidChars`<sup>Required</sup> <a name="ReplaceInvalidChars" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars"></a>

```go
func ReplaceInvalidChars() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```go
func ServerSideEncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.timeFormat"></a>

```go
func TimeFormat() *string
```

- *Type:* *string

---

##### `TrimBlanks`<sup>Required</sup> <a name="TrimBlanks" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.trimBlanks"></a>

```go
func TrimBlanks() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TruncateColumns`<sup>Required</sup> <a name="TruncateColumns" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.truncateColumns"></a>

```go
func TruncateColumns() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `WriteBufferSize`<sup>Required</sup> <a name="WriteBufferSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize"></a>

```go
func WriteBufferSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointRedshiftSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointRedshiftSettings">DataAwsccDmsEndpointRedshiftSettings</a>

---


### DataAwsccDmsEndpointS3SettingsOutputReference <a name="DataAwsccDmsEndpointS3SettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointS3SettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointS3SettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addColumnName">AddColumnName</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter">AddTrailingPaddingCharacter</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cannedAclForObjects">CannedAclForObjects</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates">CdcInsertsAndUpdates</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly">CdcInsertsOnly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval">CdcMaxBatchInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMinFileSize">CdcMinFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcPath">CdcPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvDelimiter">CsvDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNoSupValue">CsvNoSupValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNullValue">CsvNullValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">CsvRowDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataFormat">DataFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataPageSize">DataPageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter">DatePartitionDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">DatePartitionEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionSequence">DatePartitionSequence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionTimezone">DatePartitionTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit">DictPageSizeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.enableStatistics">EnableStatistics</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encodingType">EncodingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.externalTableDefinition">ExternalTableDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration">GlueCatalogGeneration</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows">IgnoreHeaderRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad">IncludeOpForFullLoad</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">ParquetTimestampInMillisecond</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetVersion">ParquetVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.preserveTransactions">PreserveTransactions</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rfc4180">Rfc4180</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rowGroupLength">RowGroupLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.timestampColumnName">TimestampColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue">UseCsvNoSupValue</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp">UseTaskStartTimeForFullLoadTimestamp</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings">DataAwsccDmsEndpointS3Settings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddColumnName`<sup>Required</sup> <a name="AddColumnName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addColumnName"></a>

```go
func AddColumnName() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AddTrailingPaddingCharacter`<sup>Required</sup> <a name="AddTrailingPaddingCharacter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter"></a>

```go
func AddTrailingPaddingCharacter() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```go
func BucketFolder() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CannedAclForObjects`<sup>Required</sup> <a name="CannedAclForObjects" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cannedAclForObjects"></a>

```go
func CannedAclForObjects() *string
```

- *Type:* *string

---

##### `CdcInsertsAndUpdates`<sup>Required</sup> <a name="CdcInsertsAndUpdates" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates"></a>

```go
func CdcInsertsAndUpdates() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CdcInsertsOnly`<sup>Required</sup> <a name="CdcInsertsOnly" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly"></a>

```go
func CdcInsertsOnly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CdcMaxBatchInterval`<sup>Required</sup> <a name="CdcMaxBatchInterval" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval"></a>

```go
func CdcMaxBatchInterval() *f64
```

- *Type:* *f64

---

##### `CdcMinFileSize`<sup>Required</sup> <a name="CdcMinFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcMinFileSize"></a>

```go
func CdcMinFileSize() *f64
```

- *Type:* *f64

---

##### `CdcPath`<sup>Required</sup> <a name="CdcPath" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.cdcPath"></a>

```go
func CdcPath() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `CsvDelimiter`<sup>Required</sup> <a name="CsvDelimiter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```go
func CsvDelimiter() *string
```

- *Type:* *string

---

##### `CsvNoSupValue`<sup>Required</sup> <a name="CsvNoSupValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNoSupValue"></a>

```go
func CsvNoSupValue() *string
```

- *Type:* *string

---

##### `CsvNullValue`<sup>Required</sup> <a name="CsvNullValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvNullValue"></a>

```go
func CsvNullValue() *string
```

- *Type:* *string

---

##### `CsvRowDelimiter`<sup>Required</sup> <a name="CsvRowDelimiter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```go
func CsvRowDelimiter() *string
```

- *Type:* *string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```go
func DataFormat() *string
```

- *Type:* *string

---

##### `DataPageSize`<sup>Required</sup> <a name="DataPageSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dataPageSize"></a>

```go
func DataPageSize() *f64
```

- *Type:* *f64

---

##### `DatePartitionDelimiter`<sup>Required</sup> <a name="DatePartitionDelimiter" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter"></a>

```go
func DatePartitionDelimiter() *string
```

- *Type:* *string

---

##### `DatePartitionEnabled`<sup>Required</sup> <a name="DatePartitionEnabled" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```go
func DatePartitionEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DatePartitionSequence`<sup>Required</sup> <a name="DatePartitionSequence" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionSequence"></a>

```go
func DatePartitionSequence() *string
```

- *Type:* *string

---

##### `DatePartitionTimezone`<sup>Required</sup> <a name="DatePartitionTimezone" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.datePartitionTimezone"></a>

```go
func DatePartitionTimezone() *string
```

- *Type:* *string

---

##### `DictPageSizeLimit`<sup>Required</sup> <a name="DictPageSizeLimit" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit"></a>

```go
func DictPageSizeLimit() *f64
```

- *Type:* *f64

---

##### `EnableStatistics`<sup>Required</sup> <a name="EnableStatistics" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.enableStatistics"></a>

```go
func EnableStatistics() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EncodingType`<sup>Required</sup> <a name="EncodingType" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encodingType"></a>

```go
func EncodingType() *string
```

- *Type:* *string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```go
func EncryptionMode() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `ExternalTableDefinition`<sup>Required</sup> <a name="ExternalTableDefinition" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```go
func ExternalTableDefinition() *string
```

- *Type:* *string

---

##### `GlueCatalogGeneration`<sup>Required</sup> <a name="GlueCatalogGeneration" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration"></a>

```go
func GlueCatalogGeneration() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IgnoreHeaderRows`<sup>Required</sup> <a name="IgnoreHeaderRows" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows"></a>

```go
func IgnoreHeaderRows() *f64
```

- *Type:* *f64

---

##### `IncludeOpForFullLoad`<sup>Required</sup> <a name="IncludeOpForFullLoad" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad"></a>

```go
func IncludeOpForFullLoad() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `ParquetTimestampInMillisecond`<sup>Required</sup> <a name="ParquetTimestampInMillisecond" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```go
func ParquetTimestampInMillisecond() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ParquetVersion`<sup>Required</sup> <a name="ParquetVersion" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```go
func ParquetVersion() *string
```

- *Type:* *string

---

##### `PreserveTransactions`<sup>Required</sup> <a name="PreserveTransactions" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.preserveTransactions"></a>

```go
func PreserveTransactions() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Rfc4180`<sup>Required</sup> <a name="Rfc4180" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rfc4180"></a>

```go
func Rfc4180() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RowGroupLength`<sup>Required</sup> <a name="RowGroupLength" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.rowGroupLength"></a>

```go
func RowGroupLength() *f64
```

- *Type:* *f64

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```go
func ServerSideEncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

##### `TimestampColumnName`<sup>Required</sup> <a name="TimestampColumnName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.timestampColumnName"></a>

```go
func TimestampColumnName() *string
```

- *Type:* *string

---

##### `UseCsvNoSupValue`<sup>Required</sup> <a name="UseCsvNoSupValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue"></a>

```go
func UseCsvNoSupValue() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="UseTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp"></a>

```go
func UseTaskStartTimeForFullLoadTimestamp() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointS3Settings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointS3Settings">DataAwsccDmsEndpointS3Settings</a>

---


### DataAwsccDmsEndpointSybaseSettingsOutputReference <a name="DataAwsccDmsEndpointSybaseSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointSybaseSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDmsEndpointSybaseSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings">DataAwsccDmsEndpointSybaseSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```go
func SecretsManagerAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId"></a>

```go
func SecretsManagerSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointSybaseSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointSybaseSettings">DataAwsccDmsEndpointSybaseSettings</a>

---


### DataAwsccDmsEndpointTagsList <a name="DataAwsccDmsEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDmsEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDmsEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDmsEndpointTagsOutputReference <a name="DataAwsccDmsEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdmsendpoint"

dataawsccdmsendpoint.NewDataAwsccDmsEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDmsEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags">DataAwsccDmsEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDmsEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsEndpoint.DataAwsccDmsEndpointTags">DataAwsccDmsEndpointTags</a>

---



