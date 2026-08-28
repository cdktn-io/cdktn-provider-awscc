# `dataAwsccEntityresolutionSchemaMapping` Submodule <a name="`dataAwsccEntityresolutionSchemaMapping` Submodule" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEntityresolutionSchemaMapping <a name="DataAwsccEntityresolutionSchemaMapping" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/entityresolution_schema_mapping awscc_entityresolution_schema_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionschemamapping"

dataawsccentityresolutionschemamapping.NewDataAwsccEntityresolutionSchemaMapping(scope Construct, id *string, config DataAwsccEntityresolutionSchemaMappingConfig) DataAwsccEntityresolutionSchemaMapping
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig">DataAwsccEntityresolutionSchemaMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig">DataAwsccEntityresolutionSchemaMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEntityresolutionSchemaMapping resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionschemamapping"

dataawsccentityresolutionschemamapping.DataAwsccEntityresolutionSchemaMapping_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionschemamapping"

dataawsccentityresolutionschemamapping.DataAwsccEntityresolutionSchemaMapping_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionschemamapping"

dataawsccentityresolutionschemamapping.DataAwsccEntityresolutionSchemaMapping_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionschemamapping"

dataawsccentityresolutionschemamapping.DataAwsccEntityresolutionSchemaMapping_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEntityresolutionSchemaMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEntityresolutionSchemaMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEntityresolutionSchemaMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/entityresolution_schema_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEntityresolutionSchemaMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.hasWorkflows">HasWorkflows</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.mappedInputFields">MappedInputFields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList">DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList">DataAwsccEntityresolutionSchemaMappingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HasWorkflows`<sup>Required</sup> <a name="HasWorkflows" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.hasWorkflows"></a>

```go
func HasWorkflows() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MappedInputFields`<sup>Required</sup> <a name="MappedInputFields" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.mappedInputFields"></a>

```go
func MappedInputFields() DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList">DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList</a>

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.schemaArn"></a>

```go
func SchemaArn() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.tags"></a>

```go
func Tags() DataAwsccEntityresolutionSchemaMappingTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList">DataAwsccEntityresolutionSchemaMappingTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEntityresolutionSchemaMappingConfig <a name="DataAwsccEntityresolutionSchemaMappingConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionschemamapping"

&dataawsccentityresolutionschemamapping.DataAwsccEntityresolutionSchemaMappingConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/entityresolution_schema_mapping#id DataAwsccEntityresolutionSchemaMapping#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEntityresolutionSchemaMappingMappedInputFields <a name="DataAwsccEntityresolutionSchemaMappingMappedInputFields" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionschemamapping"

&dataawsccentityresolutionschemamapping.DataAwsccEntityresolutionSchemaMappingMappedInputFields {

}
```


### DataAwsccEntityresolutionSchemaMappingTags <a name="DataAwsccEntityresolutionSchemaMappingTags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionschemamapping"

&dataawsccentityresolutionschemamapping.DataAwsccEntityresolutionSchemaMappingTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList <a name="DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionschemamapping"

dataawsccentityresolutionschemamapping.NewDataAwsccEntityresolutionSchemaMappingMappedInputFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference <a name="DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionschemamapping"

dataawsccentityresolutionschemamapping.NewDataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashed">Hashed</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKey">MatchKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subType">SubType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFields">DataAwsccEntityresolutionSchemaMappingMappedInputFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `Hashed`<sup>Required</sup> <a name="Hashed" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashed"></a>

```go
func Hashed() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MatchKey`<sup>Required</sup> <a name="MatchKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKey"></a>

```go
func MatchKey() *string
```

- *Type:* *string

---

##### `SubType`<sup>Required</sup> <a name="SubType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subType"></a>

```go
func SubType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionSchemaMappingMappedInputFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFields">DataAwsccEntityresolutionSchemaMappingMappedInputFields</a>

---


### DataAwsccEntityresolutionSchemaMappingTagsList <a name="DataAwsccEntityresolutionSchemaMappingTagsList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionschemamapping"

dataawsccentityresolutionschemamapping.NewDataAwsccEntityresolutionSchemaMappingTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionSchemaMappingTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionSchemaMappingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionSchemaMappingTagsOutputReference <a name="DataAwsccEntityresolutionSchemaMappingTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionschemamapping"

dataawsccentityresolutionschemamapping.NewDataAwsccEntityresolutionSchemaMappingTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionSchemaMappingTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTags">DataAwsccEntityresolutionSchemaMappingTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionSchemaMappingTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTags">DataAwsccEntityresolutionSchemaMappingTags</a>

---



