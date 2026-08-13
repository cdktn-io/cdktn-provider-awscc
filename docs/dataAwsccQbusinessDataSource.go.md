# `dataAwsccQbusinessDataSource` Submodule <a name="`dataAwsccQbusinessDataSource` Submodule" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQbusinessDataSource <a name="DataAwsccQbusinessDataSource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/qbusiness_data_source awscc_qbusiness_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSource(scope Construct, id *string, config DataAwsccQbusinessDataSourceConfig) DataAwsccQbusinessDataSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig">DataAwsccQbusinessDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig">DataAwsccQbusinessDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQbusinessDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.DataAwsccQbusinessDataSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.DataAwsccQbusinessDataSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.DataAwsccQbusinessDataSource_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.DataAwsccQbusinessDataSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccQbusinessDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccQbusinessDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccQbusinessDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/qbusiness_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQbusinessDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.configuration">Configuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.documentEnrichmentConfiguration">DocumentEnrichmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.indexId">IndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.mediaExtractionConfiguration">MediaExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.syncSchedule">SyncSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList">DataAwsccQbusinessDataSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference">DataAwsccQbusinessDataSourceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.configuration"></a>

```go
func Configuration() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DocumentEnrichmentConfiguration`<sup>Required</sup> <a name="DocumentEnrichmentConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.documentEnrichmentConfiguration"></a>

```go
func DocumentEnrichmentConfiguration() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference</a>

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.indexId"></a>

```go
func IndexId() *string
```

- *Type:* *string

---

##### `MediaExtractionConfiguration`<sup>Required</sup> <a name="MediaExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.mediaExtractionConfiguration"></a>

```go
func MediaExtractionConfiguration() DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SyncSchedule`<sup>Required</sup> <a name="SyncSchedule" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.syncSchedule"></a>

```go
func SyncSchedule() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.tags"></a>

```go
func Tags() DataAwsccQbusinessDataSourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList">DataAwsccQbusinessDataSourceTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.vpcConfiguration"></a>

```go
func VpcConfiguration() DataAwsccQbusinessDataSourceVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference">DataAwsccQbusinessDataSourceVpcConfigurationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQbusinessDataSourceConfig <a name="DataAwsccQbusinessDataSourceConfig" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/qbusiness_data_source#id DataAwsccQbusinessDataSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration {

}
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations {

}
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition {

}
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue {

}
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget {

}
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue {

}
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration {

}
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition {

}
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue {

}
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration {

}
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition {

}
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue {

}
```


### DataAwsccQbusinessDataSourceMediaExtractionConfiguration <a name="DataAwsccQbusinessDataSourceMediaExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceMediaExtractionConfiguration {

}
```


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration {

}
```


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration {

}
```


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration {

}
```


### DataAwsccQbusinessDataSourceTags <a name="DataAwsccQbusinessDataSourceTags" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceTags {

}
```


### DataAwsccQbusinessDataSourceVpcConfiguration <a name="DataAwsccQbusinessDataSourceVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

&dataawsccqbusinessdatasource.DataAwsccQbusinessDataSourceVpcConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.value"></a>

```go
func Value() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValue">DateValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValue">LongValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValue">StringListValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValue"></a>

```go
func DateValue() *string
```

- *Type:* *string

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValue"></a>

```go
func LongValue() *f64
```

- *Type:* *f64

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValue"></a>

```go
func StringListValue() *[]*string
```

- *Type:* *[]*string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperator">DocumentContentOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target">Target</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition"></a>

```go
func Condition() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a>

---

##### `DocumentContentOperator`<sup>Required</sup> <a name="DocumentContentOperator" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperator"></a>

```go
func DocumentContentOperator() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target"></a>

```go
func Target() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperator">AttributeValueOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeValueOperator`<sup>Required</sup> <a name="AttributeValueOperator" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperator"></a>

```go
func AttributeValueOperator() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.value"></a>

```go
func Value() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValue">DateValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValue">LongValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValue">StringListValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValue"></a>

```go
func DateValue() *string
```

- *Type:* *string

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValue"></a>

```go
func LongValue() *f64
```

- *Type:* *f64

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValue"></a>

```go
func StringListValue() *[]*string
```

- *Type:* *[]*string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations">InlineConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration">PostExtractionHookConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration">PreExtractionHookConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration">DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InlineConfigurations`<sup>Required</sup> <a name="InlineConfigurations" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations"></a>

```go
func InlineConfigurations() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList</a>

---

##### `PostExtractionHookConfiguration`<sup>Required</sup> <a name="PostExtractionHookConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration"></a>

```go
func PostExtractionHookConfiguration() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a>

---

##### `PreExtractionHookConfiguration`<sup>Required</sup> <a name="PreExtractionHookConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration"></a>

```go
func PreExtractionHookConfiguration() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration">DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.value"></a>

```go
func Value() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue">DateValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue">LongValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue">StringListValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue"></a>

```go
func DateValue() *string
```

- *Type:* *string

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue"></a>

```go
func LongValue() *f64
```

- *Type:* *f64

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue"></a>

```go
func StringListValue() *[]*string
```

- *Type:* *[]*string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition">InvocationCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InvocationCondition`<sup>Required</sup> <a name="InvocationCondition" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```go
func InvocationCondition() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.value"></a>

```go
func Value() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue">DateValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue">LongValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue">StringListValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue"></a>

```go
func DateValue() *string
```

- *Type:* *string

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue"></a>

```go
func LongValue() *f64
```

- *Type:* *f64

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue"></a>

```go
func StringListValue() *[]*string
```

- *Type:* *[]*string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition">InvocationCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InvocationCondition`<sup>Required</sup> <a name="InvocationCondition" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```go
func InvocationCondition() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

---


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus">AudioExtractionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioExtractionStatus`<sup>Required</sup> <a name="AudioExtractionStatus" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus"></a>

```go
func AudioExtractionStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a>

---


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus">ImageExtractionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageExtractionStatus`<sup>Required</sup> <a name="ImageExtractionStatus" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus"></a>

```go
func ImageExtractionStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a>

---


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration">AudioExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration">ImageExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration">VideoExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioExtractionConfiguration`<sup>Required</sup> <a name="AudioExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration"></a>

```go
func AudioExtractionConfiguration() DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a>

---

##### `ImageExtractionConfiguration`<sup>Required</sup> <a name="ImageExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration"></a>

```go
func ImageExtractionConfiguration() DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a>

---

##### `VideoExtractionConfiguration`<sup>Required</sup> <a name="VideoExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration"></a>

```go
func VideoExtractionConfiguration() DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceMediaExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfiguration</a>

---


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus">VideoExtractionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VideoExtractionStatus`<sup>Required</sup> <a name="VideoExtractionStatus" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus"></a>

```go
func VideoExtractionStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a>

---


### DataAwsccQbusinessDataSourceTagsList <a name="DataAwsccQbusinessDataSourceTagsList" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQbusinessDataSourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccQbusinessDataSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQbusinessDataSourceTagsOutputReference <a name="DataAwsccQbusinessDataSourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQbusinessDataSourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTags">DataAwsccQbusinessDataSourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTags">DataAwsccQbusinessDataSourceTags</a>

---


### DataAwsccQbusinessDataSourceVpcConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessdatasource"

dataawsccqbusinessdatasource.NewDataAwsccQbusinessDataSourceVpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessDataSourceVpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfiguration">DataAwsccQbusinessDataSourceVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessDataSourceVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfiguration">DataAwsccQbusinessDataSourceVpcConfiguration</a>

---



