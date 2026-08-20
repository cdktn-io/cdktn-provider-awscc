# `dataAwsccGlueTableOptimizer` Submodule <a name="`dataAwsccGlueTableOptimizer` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueTableOptimizer <a name="DataAwsccGlueTableOptimizer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/glue_table_optimizer awscc_glue_table_optimizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

dataawsccgluetableoptimizer.NewDataAwsccGlueTableOptimizer(scope Construct, id *string, config DataAwsccGlueTableOptimizerConfig) DataAwsccGlueTableOptimizer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig">DataAwsccGlueTableOptimizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig">DataAwsccGlueTableOptimizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlueTableOptimizer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

dataawsccgluetableoptimizer.DataAwsccGlueTableOptimizer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

dataawsccgluetableoptimizer.DataAwsccGlueTableOptimizer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

dataawsccgluetableoptimizer.DataAwsccGlueTableOptimizer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

dataawsccgluetableoptimizer.DataAwsccGlueTableOptimizer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGlueTableOptimizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGlueTableOptimizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGlueTableOptimizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/glue_table_optimizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueTableOptimizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.tableOptimizerConfiguration">TableOptimizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `TableOptimizerConfiguration`<sup>Required</sup> <a name="TableOptimizerConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.tableOptimizerConfiguration"></a>

```go
func TableOptimizerConfiguration() DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueTableOptimizerConfig <a name="DataAwsccGlueTableOptimizerConfig" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

&dataawsccgluetableoptimizer.DataAwsccGlueTableOptimizerConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/glue_table_optimizer#id DataAwsccGlueTableOptimizer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueTableOptimizerTableOptimizerConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

&dataawsccgluetableoptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfiguration {

}
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

&dataawsccgluetableoptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration {

}
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

&dataawsccgluetableoptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration {

}
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

&dataawsccgluetableoptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration {

}
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

&dataawsccgluetableoptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration {

}
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

&dataawsccgluetableoptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration {

}
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

&dataawsccgluetableoptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration {

}
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

&dataawsccgluetableoptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

dataawsccgluetableoptimizer.NewDataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThreshold">DeleteFileThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFiles">MinInputFiles</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategy">Strategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteFileThreshold`<sup>Required</sup> <a name="DeleteFileThreshold" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThreshold"></a>

```go
func DeleteFileThreshold() *f64
```

- *Type:* *f64

---

##### `MinInputFiles`<sup>Required</sup> <a name="MinInputFiles" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFiles"></a>

```go
func MinInputFiles() *f64
```

- *Type:* *f64

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategy"></a>

```go
func Strategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

dataawsccgluetableoptimizer.NewDataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfiguration">IcebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IcebergConfiguration`<sup>Required</sup> <a name="IcebergConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfiguration"></a>

```go
func IcebergConfiguration() DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

dataawsccgluetableoptimizer.NewDataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDays">OrphanFileRetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OrphanFileRetentionPeriodInDays`<sup>Required</sup> <a name="OrphanFileRetentionPeriodInDays" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDays"></a>

```go
func OrphanFileRetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

dataawsccgluetableoptimizer.NewDataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfiguration">IcebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IcebergConfiguration`<sup>Required</sup> <a name="IcebergConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfiguration"></a>

```go
func IcebergConfiguration() DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

dataawsccgluetableoptimizer.NewDataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfiguration">CompactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfiguration">OrphanFileDeletionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfiguration">RetentionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompactionConfiguration`<sup>Required</sup> <a name="CompactionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfiguration"></a>

```go
func CompactionConfiguration() DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `OrphanFileDeletionConfiguration`<sup>Required</sup> <a name="OrphanFileDeletionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfiguration"></a>

```go
func OrphanFileDeletionConfiguration() DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference</a>

---

##### `RetentionConfiguration`<sup>Required</sup> <a name="RetentionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfiguration"></a>

```go
func RetentionConfiguration() DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfiguration"></a>

```go
func VpcConfiguration() DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOptimizerTableOptimizerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

dataawsccgluetableoptimizer.NewDataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFiles">CleanExpiredFiles</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetain">NumberOfSnapshotsToRetain</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDays">SnapshotRetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CleanExpiredFiles`<sup>Required</sup> <a name="CleanExpiredFiles" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFiles"></a>

```go
func CleanExpiredFiles() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NumberOfSnapshotsToRetain`<sup>Required</sup> <a name="NumberOfSnapshotsToRetain" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetain"></a>

```go
func NumberOfSnapshotsToRetain() *f64
```

- *Type:* *f64

---

##### `SnapshotRetentionPeriodInDays`<sup>Required</sup> <a name="SnapshotRetentionPeriodInDays" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDays"></a>

```go
func SnapshotRetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

dataawsccgluetableoptimizer.NewDataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfiguration">IcebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IcebergConfiguration`<sup>Required</sup> <a name="IcebergConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfiguration"></a>

```go
func IcebergConfiguration() DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccgluetableoptimizer"

dataawsccgluetableoptimizer.NewDataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionName">GlueConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlueConnectionName`<sup>Required</sup> <a name="GlueConnectionName" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionName"></a>

```go
func GlueConnectionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

---



