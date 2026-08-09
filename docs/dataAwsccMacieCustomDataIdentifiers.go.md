# `dataAwsccMacieCustomDataIdentifiers` Submodule <a name="`dataAwsccMacieCustomDataIdentifiers` Submodule" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMacieCustomDataIdentifiers <a name="DataAwsccMacieCustomDataIdentifiers" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/macie_custom_data_identifiers awscc_macie_custom_data_identifiers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmaciecustomdataidentifiers"

dataawsccmaciecustomdataidentifiers.NewDataAwsccMacieCustomDataIdentifiers(scope Construct, id *string, config DataAwsccMacieCustomDataIdentifiersConfig) DataAwsccMacieCustomDataIdentifiers
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig">DataAwsccMacieCustomDataIdentifiersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig">DataAwsccMacieCustomDataIdentifiersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMacieCustomDataIdentifiers resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmaciecustomdataidentifiers"

dataawsccmaciecustomdataidentifiers.DataAwsccMacieCustomDataIdentifiers_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmaciecustomdataidentifiers"

dataawsccmaciecustomdataidentifiers.DataAwsccMacieCustomDataIdentifiers_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmaciecustomdataidentifiers"

dataawsccmaciecustomdataidentifiers.DataAwsccMacieCustomDataIdentifiers_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmaciecustomdataidentifiers"

dataawsccmaciecustomdataidentifiers.DataAwsccMacieCustomDataIdentifiers_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccMacieCustomDataIdentifiers resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccMacieCustomDataIdentifiers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccMacieCustomDataIdentifiers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/macie_custom_data_identifiers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMacieCustomDataIdentifiers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiers.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMacieCustomDataIdentifiersConfig <a name="DataAwsccMacieCustomDataIdentifiersConfig" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmaciecustomdataidentifiers"

&dataawsccmaciecustomdataidentifiers.DataAwsccMacieCustomDataIdentifiersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMacieCustomDataIdentifiers.DataAwsccMacieCustomDataIdentifiersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---



