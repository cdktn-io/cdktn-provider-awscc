# `dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation` Submodule <a name="`dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanroomsml_configured_model_algorithm_association awscc_cleanroomsml_configured_model_algorithm_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation(scope Construct, id *string, config DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanroomsml_configured_model_algorithm_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmArn">ConfiguredModelAlgorithmArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmAssociationArn">ConfiguredModelAlgorithmAssociationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.privacyConfiguration">PrivacyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.collaborationIdentifier"></a>

```go
func CollaborationIdentifier() *string
```

- *Type:* *string

---

##### `ConfiguredModelAlgorithmArn`<sup>Required</sup> <a name="ConfiguredModelAlgorithmArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmArn"></a>

```go
func ConfiguredModelAlgorithmArn() *string
```

- *Type:* *string

---

##### `ConfiguredModelAlgorithmAssociationArn`<sup>Required</sup> <a name="ConfiguredModelAlgorithmAssociationArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmAssociationArn"></a>

```go
func ConfiguredModelAlgorithmAssociationArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.membershipIdentifier"></a>

```go
func MembershipIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivacyConfiguration`<sup>Required</sup> <a name="PrivacyConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.privacyConfiguration"></a>

```go
func PrivacyConfiguration() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.tags"></a>

```go
func Tags() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanroomsml_configured_model_algorithm_association#id DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize {

}
```


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

&dataawscccleanroomsmlconfiguredmodelalgorithmassociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.policies">Policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.policies"></a>

```go
func Policies() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelExports">TrainedModelExports</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelInferenceJobs">TrainedModelInferenceJobs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModels">TrainedModels</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TrainedModelExports`<sup>Required</sup> <a name="TrainedModelExports" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelExports"></a>

```go
func TrainedModelExports() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference</a>

---

##### `TrainedModelInferenceJobs`<sup>Required</sup> <a name="TrainedModelInferenceJobs" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelInferenceJobs"></a>

```go
func TrainedModelInferenceJobs() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference</a>

---

##### `TrainedModels`<sup>Required</sup> <a name="TrainedModels" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModels"></a>

```go
func TrainedModels() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.filesToExport">FilesToExport</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.maxSize">MaxSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilesToExport`<sup>Required</sup> <a name="FilesToExport" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.filesToExport"></a>

```go
func FilesToExport() *[]*string
```

- *Type:* *[]*string

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.maxSize"></a>

```go
func MaxSize() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.get"></a>

```go
func Get(index *f64) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiers">CustomDataIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomDataIdentifiers`<sup>Required</sup> <a name="CustomDataIdentifiers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiers"></a>

```go
func CustomDataIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfig">CustomEntityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedact">EntitiesToRedact</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomEntityConfig`<sup>Required</sup> <a name="CustomEntityConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfig"></a>

```go
func CustomEntityConfig() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference</a>

---

##### `EntitiesToRedact`<sup>Required</sup> <a name="EntitiesToRedact" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedact"></a>

```go
func EntitiesToRedact() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.allowedAccountIds">AllowedAccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.filterPattern">FilterPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logRedactionConfiguration">LogRedactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAccountIds`<sup>Required</sup> <a name="AllowedAccountIds" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.allowedAccountIds"></a>

```go
func AllowedAccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.filterPattern"></a>

```go
func FilterPattern() *string
```

- *Type:* *string

---

##### `LogRedactionConfiguration`<sup>Required</sup> <a name="LogRedactionConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logRedactionConfiguration"></a>

```go
func LogRedactionConfiguration() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference</a>

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.containerLogs">ContainerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.maxOutputSize">MaxOutputSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerLogs`<sup>Required</sup> <a name="ContainerLogs" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.containerLogs"></a>

```go
func ContainerLogs() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList</a>

---

##### `MaxOutputSize`<sup>Required</sup> <a name="MaxOutputSize" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.maxOutputSize"></a>

```go
func MaxOutputSize() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.get"></a>

```go
func Get(index *f64) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiers">CustomDataIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomDataIdentifiers`<sup>Required</sup> <a name="CustomDataIdentifiers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiers"></a>

```go
func CustomDataIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfig">CustomEntityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedact">EntitiesToRedact</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomEntityConfig`<sup>Required</sup> <a name="CustomEntityConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfig"></a>

```go
func CustomEntityConfig() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference</a>

---

##### `EntitiesToRedact`<sup>Required</sup> <a name="EntitiesToRedact" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedact"></a>

```go
func EntitiesToRedact() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.allowedAccountIds">AllowedAccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.filterPattern">FilterPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logRedactionConfiguration">LogRedactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAccountIds`<sup>Required</sup> <a name="AllowedAccountIds" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.allowedAccountIds"></a>

```go
func AllowedAccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.filterPattern"></a>

```go
func FilterPattern() *string
```

- *Type:* *string

---

##### `LogRedactionConfiguration`<sup>Required</sup> <a name="LogRedactionConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logRedactionConfiguration"></a>

```go
func LogRedactionConfiguration() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference</a>

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.noiseLevel">NoiseLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NoiseLevel`<sup>Required</sup> <a name="NoiseLevel" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.noiseLevel"></a>

```go
func NoiseLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerLogs">ContainerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerMetrics">ContainerMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.maxArtifactSize">MaxArtifactSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerLogs`<sup>Required</sup> <a name="ContainerLogs" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerLogs"></a>

```go
func ContainerLogs() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList</a>

---

##### `ContainerMetrics`<sup>Required</sup> <a name="ContainerMetrics" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerMetrics"></a>

```go
func ContainerMetrics() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference</a>

---

##### `MaxArtifactSize`<sup>Required</sup> <a name="MaxArtifactSize" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.maxArtifactSize"></a>

```go
func MaxArtifactSize() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a>

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference <a name="DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmlconfiguredmodelalgorithmassociation"

dataawscccleanroomsmlconfiguredmodelalgorithmassociation.NewDataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation.DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags">DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags</a>

---



