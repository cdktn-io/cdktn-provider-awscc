# `dataAwsccQbusinessRetriever` Submodule <a name="`dataAwsccQbusinessRetriever` Submodule" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQbusinessRetriever <a name="DataAwsccQbusinessRetriever" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/qbusiness_retriever awscc_qbusiness_retriever}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

dataawsccqbusinessretriever.NewDataAwsccQbusinessRetriever(scope Construct, id *string, config DataAwsccQbusinessRetrieverConfig) DataAwsccQbusinessRetriever
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig">DataAwsccQbusinessRetrieverConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig">DataAwsccQbusinessRetrieverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQbusinessRetriever resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

dataawsccqbusinessretriever.DataAwsccQbusinessRetriever_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

dataawsccqbusinessretriever.DataAwsccQbusinessRetriever_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

dataawsccqbusinessretriever.DataAwsccQbusinessRetriever_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

dataawsccqbusinessretriever.DataAwsccQbusinessRetriever_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccQbusinessRetriever resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccQbusinessRetriever to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccQbusinessRetriever that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/qbusiness_retriever#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQbusinessRetriever to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference">DataAwsccQbusinessRetrieverConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.retrieverArn">RetrieverArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.retrieverId">RetrieverId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList">DataAwsccQbusinessRetrieverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.configuration"></a>

```go
func Configuration() DataAwsccQbusinessRetrieverConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference">DataAwsccQbusinessRetrieverConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `RetrieverArn`<sup>Required</sup> <a name="RetrieverArn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.retrieverArn"></a>

```go
func RetrieverArn() *string
```

- *Type:* *string

---

##### `RetrieverId`<sup>Required</sup> <a name="RetrieverId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.retrieverId"></a>

```go
func RetrieverId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.tags"></a>

```go
func Tags() DataAwsccQbusinessRetrieverTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList">DataAwsccQbusinessRetrieverTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetriever.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQbusinessRetrieverConfig <a name="DataAwsccQbusinessRetrieverConfig" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

&dataawsccqbusinessretriever.DataAwsccQbusinessRetrieverConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/qbusiness_retriever#id DataAwsccQbusinessRetriever#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQbusinessRetrieverConfiguration <a name="DataAwsccQbusinessRetrieverConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

&dataawsccqbusinessretriever.DataAwsccQbusinessRetrieverConfiguration {

}
```


### DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration <a name="DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

&dataawsccqbusinessretriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration {

}
```


### DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration <a name="DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

&dataawsccqbusinessretriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration {

}
```


### DataAwsccQbusinessRetrieverTags <a name="DataAwsccQbusinessRetrieverTags" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

&dataawsccqbusinessretriever.DataAwsccQbusinessRetrieverTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference <a name="DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

dataawsccqbusinessretriever.NewDataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.indexId">IndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration">DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.indexId"></a>

```go
func IndexId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration">DataAwsccQbusinessRetrieverConfigurationKendraIndexConfiguration</a>

---


### DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference <a name="DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

dataawsccqbusinessretriever.NewDataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.indexId">IndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration">DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.indexId"></a>

```go
func IndexId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration">DataAwsccQbusinessRetrieverConfigurationNativeIndexConfiguration</a>

---


### DataAwsccQbusinessRetrieverConfigurationOutputReference <a name="DataAwsccQbusinessRetrieverConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

dataawsccqbusinessretriever.NewDataAwsccQbusinessRetrieverConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessRetrieverConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.kendraIndexConfiguration">KendraIndexConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference">DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.nativeIndexConfiguration">NativeIndexConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference">DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfiguration">DataAwsccQbusinessRetrieverConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KendraIndexConfiguration`<sup>Required</sup> <a name="KendraIndexConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.kendraIndexConfiguration"></a>

```go
func KendraIndexConfiguration() DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference">DataAwsccQbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference</a>

---

##### `NativeIndexConfiguration`<sup>Required</sup> <a name="NativeIndexConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.nativeIndexConfiguration"></a>

```go
func NativeIndexConfiguration() DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference">DataAwsccQbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessRetrieverConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverConfiguration">DataAwsccQbusinessRetrieverConfiguration</a>

---


### DataAwsccQbusinessRetrieverTagsList <a name="DataAwsccQbusinessRetrieverTagsList" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

dataawsccqbusinessretriever.NewDataAwsccQbusinessRetrieverTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQbusinessRetrieverTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.get"></a>

```go
func Get(index *f64) DataAwsccQbusinessRetrieverTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQbusinessRetrieverTagsOutputReference <a name="DataAwsccQbusinessRetrieverTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinessretriever"

dataawsccqbusinessretriever.NewDataAwsccQbusinessRetrieverTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQbusinessRetrieverTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTags">DataAwsccQbusinessRetrieverTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessRetrieverTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessRetriever.DataAwsccQbusinessRetrieverTags">DataAwsccQbusinessRetrieverTags</a>

---



