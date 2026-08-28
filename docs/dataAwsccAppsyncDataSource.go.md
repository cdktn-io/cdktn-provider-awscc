# `dataAwsccAppsyncDataSource` Submodule <a name="`dataAwsccAppsyncDataSource` Submodule" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppsyncDataSource <a name="DataAwsccAppsyncDataSource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_data_source awscc_appsync_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.NewDataAwsccAppsyncDataSource(scope Construct, id *string, config DataAwsccAppsyncDataSourceConfig) DataAwsccAppsyncDataSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig">DataAwsccAppsyncDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig">DataAwsccAppsyncDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppsyncDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.DataAwsccAppsyncDataSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.DataAwsccAppsyncDataSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.DataAwsccAppsyncDataSource_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.DataAwsccAppsyncDataSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccAppsyncDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccAppsyncDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccAppsyncDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppsyncDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dynamoDbConfig">DynamoDbConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference">DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.elasticsearchConfig">ElasticsearchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference">DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.eventBridgeConfig">EventBridgeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference">DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.httpConfig">HttpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference">DataAwsccAppsyncDataSourceLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.metricsConfig">MetricsConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.openSearchServiceConfig">OpenSearchServiceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference">DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.relationalDatabaseConfig">RelationalDatabaseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference">DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DynamoDbConfig`<sup>Required</sup> <a name="DynamoDbConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dynamoDbConfig"></a>

```go
func DynamoDbConfig() DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference">DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference</a>

---

##### `ElasticsearchConfig`<sup>Required</sup> <a name="ElasticsearchConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.elasticsearchConfig"></a>

```go
func ElasticsearchConfig() DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference">DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference</a>

---

##### `EventBridgeConfig`<sup>Required</sup> <a name="EventBridgeConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.eventBridgeConfig"></a>

```go
func EventBridgeConfig() DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference">DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference</a>

---

##### `HttpConfig`<sup>Required</sup> <a name="HttpConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.httpConfig"></a>

```go
func HttpConfig() DataAwsccAppsyncDataSourceHttpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigOutputReference</a>

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.lambdaConfig"></a>

```go
func LambdaConfig() DataAwsccAppsyncDataSourceLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference">DataAwsccAppsyncDataSourceLambdaConfigOutputReference</a>

---

##### `MetricsConfig`<sup>Required</sup> <a name="MetricsConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.metricsConfig"></a>

```go
func MetricsConfig() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpenSearchServiceConfig`<sup>Required</sup> <a name="OpenSearchServiceConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.openSearchServiceConfig"></a>

```go
func OpenSearchServiceConfig() DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference">DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference</a>

---

##### `RelationalDatabaseConfig`<sup>Required</sup> <a name="RelationalDatabaseConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.relationalDatabaseConfig"></a>

```go
func RelationalDatabaseConfig() DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference">DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference</a>

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.serviceRoleArn"></a>

```go
func ServiceRoleArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppsyncDataSourceConfig <a name="DataAwsccAppsyncDataSourceConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

&dataawsccappsyncdatasource.DataAwsccAppsyncDataSourceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_data_source#id DataAwsccAppsyncDataSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppsyncDataSourceDynamoDbConfig <a name="DataAwsccAppsyncDataSourceDynamoDbConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

&dataawsccappsyncdatasource.DataAwsccAppsyncDataSourceDynamoDbConfig {

}
```


### DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig <a name="DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

&dataawsccappsyncdatasource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig {

}
```


### DataAwsccAppsyncDataSourceElasticsearchConfig <a name="DataAwsccAppsyncDataSourceElasticsearchConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

&dataawsccappsyncdatasource.DataAwsccAppsyncDataSourceElasticsearchConfig {

}
```


### DataAwsccAppsyncDataSourceEventBridgeConfig <a name="DataAwsccAppsyncDataSourceEventBridgeConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

&dataawsccappsyncdatasource.DataAwsccAppsyncDataSourceEventBridgeConfig {

}
```


### DataAwsccAppsyncDataSourceHttpConfig <a name="DataAwsccAppsyncDataSourceHttpConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

&dataawsccappsyncdatasource.DataAwsccAppsyncDataSourceHttpConfig {

}
```


### DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig <a name="DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

&dataawsccappsyncdatasource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig {

}
```


### DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig <a name="DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

&dataawsccappsyncdatasource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig {

}
```


### DataAwsccAppsyncDataSourceLambdaConfig <a name="DataAwsccAppsyncDataSourceLambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

&dataawsccappsyncdatasource.DataAwsccAppsyncDataSourceLambdaConfig {

}
```


### DataAwsccAppsyncDataSourceOpenSearchServiceConfig <a name="DataAwsccAppsyncDataSourceOpenSearchServiceConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

&dataawsccappsyncdatasource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig {

}
```


### DataAwsccAppsyncDataSourceRelationalDatabaseConfig <a name="DataAwsccAppsyncDataSourceRelationalDatabaseConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

&dataawsccappsyncdatasource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig {

}
```


### DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig <a name="DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

&dataawsccappsyncdatasource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference <a name="DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.NewDataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl">BaseTableTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName">DeltaSyncTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl">DeltaSyncTableTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig">DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseTableTtl`<sup>Required</sup> <a name="BaseTableTtl" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl"></a>

```go
func BaseTableTtl() *string
```

- *Type:* *string

---

##### `DeltaSyncTableName`<sup>Required</sup> <a name="DeltaSyncTableName" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName"></a>

```go
func DeltaSyncTableName() *string
```

- *Type:* *string

---

##### `DeltaSyncTableTtl`<sup>Required</sup> <a name="DeltaSyncTableTtl" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl"></a>

```go
func DeltaSyncTableTtl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig">DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---


### DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference <a name="DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.NewDataAwsccAppsyncDataSourceDynamoDbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig">DeltaSyncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials">UseCallerCredentials</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.versioned">Versioned</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig">DataAwsccAppsyncDataSourceDynamoDbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `DeltaSyncConfig`<sup>Required</sup> <a name="DeltaSyncConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig"></a>

```go
func DeltaSyncConfig() DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a>

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `UseCallerCredentials`<sup>Required</sup> <a name="UseCallerCredentials" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials"></a>

```go
func UseCallerCredentials() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Versioned`<sup>Required</sup> <a name="Versioned" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.versioned"></a>

```go
func Versioned() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncDataSourceDynamoDbConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig">DataAwsccAppsyncDataSourceDynamoDbConfig</a>

---


### DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference <a name="DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.NewDataAwsccAppsyncDataSourceElasticsearchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig">DataAwsccAppsyncDataSourceElasticsearchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncDataSourceElasticsearchConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig">DataAwsccAppsyncDataSourceElasticsearchConfig</a>

---


### DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference <a name="DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.NewDataAwsccAppsyncDataSourceEventBridgeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn">EventBusArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig">DataAwsccAppsyncDataSourceEventBridgeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn"></a>

```go
func EventBusArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncDataSourceEventBridgeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig">DataAwsccAppsyncDataSourceEventBridgeConfig</a>

---


### DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference <a name="DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.NewDataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion">SigningRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName">SigningServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SigningRegion`<sup>Required</sup> <a name="SigningRegion" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion"></a>

```go
func SigningRegion() *string
```

- *Type:* *string

---

##### `SigningServiceName`<sup>Required</sup> <a name="SigningServiceName" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName"></a>

```go
func SigningServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---


### DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference <a name="DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.NewDataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig">AwsIamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType"></a>

```go
func AuthorizationType() *string
```

- *Type:* *string

---

##### `AwsIamConfig`<sup>Required</sup> <a name="AwsIamConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig"></a>

```go
func AwsIamConfig() DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig</a>

---


### DataAwsccAppsyncDataSourceHttpConfigOutputReference <a name="DataAwsccAppsyncDataSourceHttpConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.NewDataAwsccAppsyncDataSourceHttpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncDataSourceHttpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig">DataAwsccAppsyncDataSourceHttpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig"></a>

```go
func AuthorizationConfig() DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncDataSourceHttpConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig">DataAwsccAppsyncDataSourceHttpConfig</a>

---


### DataAwsccAppsyncDataSourceLambdaConfigOutputReference <a name="DataAwsccAppsyncDataSourceLambdaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.NewDataAwsccAppsyncDataSourceLambdaConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncDataSourceLambdaConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig">DataAwsccAppsyncDataSourceLambdaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaFunctionArn`<sup>Required</sup> <a name="LambdaFunctionArn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn"></a>

```go
func LambdaFunctionArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncDataSourceLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig">DataAwsccAppsyncDataSourceLambdaConfig</a>

---


### DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference <a name="DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.NewDataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig">DataAwsccAppsyncDataSourceOpenSearchServiceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncDataSourceOpenSearchServiceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig">DataAwsccAppsyncDataSourceOpenSearchServiceConfig</a>

---


### DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference <a name="DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.NewDataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig">RdsHttpEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType">RelationalDatabaseSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig">DataAwsccAppsyncDataSourceRelationalDatabaseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RdsHttpEndpointConfig`<sup>Required</sup> <a name="RdsHttpEndpointConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig"></a>

```go
func RdsHttpEndpointConfig() DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a>

---

##### `RelationalDatabaseSourceType`<sup>Required</sup> <a name="RelationalDatabaseSourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType"></a>

```go
func RelationalDatabaseSourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncDataSourceRelationalDatabaseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig">DataAwsccAppsyncDataSourceRelationalDatabaseConfig</a>

---


### DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference <a name="DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappsyncdatasource"

dataawsccappsyncdatasource.NewDataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn">AwsSecretStoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `AwsSecretStoreArn`<sup>Required</sup> <a name="AwsSecretStoreArn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn"></a>

```go
func AwsSecretStoreArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier"></a>

```go
func DbClusterIdentifier() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---



