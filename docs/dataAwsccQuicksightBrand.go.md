# `dataAwsccQuicksightBrand` Submodule <a name="`dataAwsccQuicksightBrand` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightBrand <a name="DataAwsccQuicksightBrand" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/quicksight_brand awscc_quicksight_brand}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrand(scope Construct, id *string, config DataAwsccQuicksightBrandConfig) DataAwsccQuicksightBrand
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig">DataAwsccQuicksightBrandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig">DataAwsccQuicksightBrandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightBrand resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.DataAwsccQuicksightBrand_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.DataAwsccQuicksightBrand_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.DataAwsccQuicksightBrand_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.DataAwsccQuicksightBrand_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccQuicksightBrand resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccQuicksightBrand to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccQuicksightBrand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/quicksight_brand#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightBrand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandDefinition">BrandDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference">DataAwsccQuicksightBrandBrandDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandId">BrandId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandStatus">BrandStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList">DataAwsccQuicksightBrandTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.versionStatus">VersionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `BrandDefinition`<sup>Required</sup> <a name="BrandDefinition" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandDefinition"></a>

```go
func BrandDefinition() DataAwsccQuicksightBrandBrandDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference">DataAwsccQuicksightBrandBrandDefinitionOutputReference</a>

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandId"></a>

```go
func BrandId() *string
```

- *Type:* *string

---

##### `BrandStatus`<sup>Required</sup> <a name="BrandStatus" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandStatus"></a>

```go
func BrandStatus() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.tags"></a>

```go
func Tags() DataAwsccQuicksightBrandTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList">DataAwsccQuicksightBrandTagsList</a>

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `VersionStatus`<sup>Required</sup> <a name="VersionStatus" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.versionStatus"></a>

```go
func VersionStatus() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightBrandBrandDefinition <a name="DataAwsccQuicksightBrandBrandDefinition" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinition {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationTheme <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationTheme" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar {

}
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar {

}
```


### DataAwsccQuicksightBrandConfig <a name="DataAwsccQuicksightBrandConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/quicksight_brand#id DataAwsccQuicksightBrand#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightBrandTags <a name="DataAwsccQuicksightBrandTags" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

&dataawsccquicksightbrand.DataAwsccQuicksightBrandTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.foreground">Foreground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.foreground"></a>

```go
func Foreground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.foreground">Foreground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.foreground"></a>

```go
func Foreground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.foreground">Foreground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.foreground"></a>

```go
func Foreground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.foreground">Foreground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.foreground"></a>

```go
func Foreground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.foreground">Foreground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.foreground"></a>

```go
func Foreground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.accent">Accent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.danger">Danger</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.info">Info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.measure">Measure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.secondary">Secondary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.success">Success</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.warning">Warning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Accent`<sup>Required</sup> <a name="Accent" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.accent"></a>

```go
func Accent() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference</a>

---

##### `Danger`<sup>Required</sup> <a name="Danger" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.danger"></a>

```go
func Danger() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.dimension"></a>

```go
func Dimension() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference</a>

---

##### `Info`<sup>Required</sup> <a name="Info" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.info"></a>

```go
func Info() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference</a>

---

##### `Measure`<sup>Required</sup> <a name="Measure" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.measure"></a>

```go
func Measure() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference</a>

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.primary"></a>

```go
func Primary() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference</a>

---

##### `Secondary`<sup>Required</sup> <a name="Secondary" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.secondary"></a>

```go
func Secondary() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference</a>

---

##### `Success`<sup>Required</sup> <a name="Success" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.success"></a>

```go
func Success() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference</a>

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.warning"></a>

```go
func Warning() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.foreground">Foreground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.foreground"></a>

```go
func Foreground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.foreground">Foreground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.foreground"></a>

```go
func Foreground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.foreground">Foreground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.foreground"></a>

```go
func Foreground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.foreground">Foreground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.foreground"></a>

```go
func Foreground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.foreground">Foreground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.foreground"></a>

```go
func Foreground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.background">Background</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.foreground">Foreground</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.background"></a>

```go
func Background() *string
```

- *Type:* *string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.foreground"></a>

```go
func Foreground() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.contextualNavbar">ContextualNavbar</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.globalNavbar">GlobalNavbar</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextualNavbar`<sup>Required</sup> <a name="ContextualNavbar" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.contextualNavbar"></a>

```go
func ContextualNavbar() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference</a>

---

##### `GlobalNavbar`<sup>Required</sup> <a name="GlobalNavbar" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.globalNavbar"></a>

```go
func GlobalNavbar() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.navbarStyle">NavbarStyle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NavbarStyle`<sup>Required</sup> <a name="NavbarStyle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.navbarStyle"></a>

```go
func NavbarStyle() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandColorPalette">BrandColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandElementStyle">BrandElementStyle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme">DataAwsccQuicksightBrandBrandDefinitionApplicationTheme</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BrandColorPalette`<sup>Required</sup> <a name="BrandColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandColorPalette"></a>

```go
func BrandColorPalette() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference</a>

---

##### `BrandElementStyle`<sup>Required</sup> <a name="BrandElementStyle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandElementStyle"></a>

```go
func BrandElementStyle() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinitionApplicationTheme
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme">DataAwsccQuicksightBrandBrandDefinitionApplicationTheme</a>

---


### DataAwsccQuicksightBrandBrandDefinitionOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandBrandDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightBrandBrandDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.applicationTheme">ApplicationTheme</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.brandName">BrandName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinition">DataAwsccQuicksightBrandBrandDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationTheme`<sup>Required</sup> <a name="ApplicationTheme" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.applicationTheme"></a>

```go
func ApplicationTheme() DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference</a>

---

##### `BrandName`<sup>Required</sup> <a name="BrandName" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.brandName"></a>

```go
func BrandName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandBrandDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinition">DataAwsccQuicksightBrandBrandDefinition</a>

---


### DataAwsccQuicksightBrandTagsList <a name="DataAwsccQuicksightBrandTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQuicksightBrandTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.get"></a>

```go
func Get(index *f64) DataAwsccQuicksightBrandTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQuicksightBrandTagsOutputReference <a name="DataAwsccQuicksightBrandTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccquicksightbrand"

dataawsccquicksightbrand.NewDataAwsccQuicksightBrandTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQuicksightBrandTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTags">DataAwsccQuicksightBrandTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightBrandTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTags">DataAwsccQuicksightBrandTags</a>

---



