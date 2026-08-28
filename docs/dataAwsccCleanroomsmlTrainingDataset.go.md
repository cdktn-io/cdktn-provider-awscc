# `dataAwsccCleanroomsmlTrainingDataset` Submodule <a name="`dataAwsccCleanroomsmlTrainingDataset` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsmlTrainingDataset <a name="DataAwsccCleanroomsmlTrainingDataset" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanroomsml_training_dataset awscc_cleanroomsml_training_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.NewDataAwsccCleanroomsmlTrainingDataset(scope Construct, id *string, config DataAwsccCleanroomsmlTrainingDatasetConfig) DataAwsccCleanroomsmlTrainingDataset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig">DataAwsccCleanroomsmlTrainingDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig">DataAwsccCleanroomsmlTrainingDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsmlTrainingDataset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.DataAwsccCleanroomsmlTrainingDataset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.DataAwsccCleanroomsmlTrainingDataset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.DataAwsccCleanroomsmlTrainingDataset_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.DataAwsccCleanroomsmlTrainingDataset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCleanroomsmlTrainingDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCleanroomsmlTrainingDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCleanroomsmlTrainingDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanroomsml_training_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsmlTrainingDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList">DataAwsccCleanroomsmlTrainingDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.trainingData">TrainingData</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList">DataAwsccCleanroomsmlTrainingDatasetTrainingDataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.trainingDatasetArn">TrainingDatasetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.tags"></a>

```go
func Tags() DataAwsccCleanroomsmlTrainingDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList">DataAwsccCleanroomsmlTrainingDatasetTagsList</a>

---

##### `TrainingData`<sup>Required</sup> <a name="TrainingData" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.trainingData"></a>

```go
func TrainingData() DataAwsccCleanroomsmlTrainingDatasetTrainingDataList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList">DataAwsccCleanroomsmlTrainingDatasetTrainingDataList</a>

---

##### `TrainingDatasetArn`<sup>Required</sup> <a name="TrainingDatasetArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.trainingDatasetArn"></a>

```go
func TrainingDatasetArn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDataset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsmlTrainingDatasetConfig <a name="DataAwsccCleanroomsmlTrainingDatasetConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

&dataawscccleanroomsmltrainingdataset.DataAwsccCleanroomsmlTrainingDatasetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanroomsml_training_dataset#id DataAwsccCleanroomsmlTrainingDataset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsmlTrainingDatasetTags <a name="DataAwsccCleanroomsmlTrainingDatasetTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

&dataawscccleanroomsmltrainingdataset.DataAwsccCleanroomsmlTrainingDatasetTags {

}
```


### DataAwsccCleanroomsmlTrainingDatasetTrainingData <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingData" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingData.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

&dataawscccleanroomsmltrainingdataset.DataAwsccCleanroomsmlTrainingDatasetTrainingData {

}
```


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

&dataawscccleanroomsmltrainingdataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig {

}
```


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

&dataawscccleanroomsmltrainingdataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource {

}
```


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

&dataawscccleanroomsmltrainingdataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource {

}
```


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

&dataawscccleanroomsmltrainingdataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsmlTrainingDatasetTagsList <a name="DataAwsccCleanroomsmlTrainingDatasetTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.NewDataAwsccCleanroomsmlTrainingDatasetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCleanroomsmlTrainingDatasetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference <a name="DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.NewDataAwsccCleanroomsmlTrainingDatasetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTags">DataAwsccCleanroomsmlTrainingDatasetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlTrainingDatasetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTags">DataAwsccCleanroomsmlTrainingDatasetTags</a>

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.NewDataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a>

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.NewDataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSource">GlueDataSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlueDataSource`<sup>Required</sup> <a name="GlueDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSource"></a>

```go
func GlueDataSource() DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a>

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.NewDataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSource">DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSource"></a>

```go
func DataSource() DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schema"></a>

```go
func Schema() DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfig</a>

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.NewDataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get"></a>

```go
func Get(index *f64) DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.NewDataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypes">ColumnTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `ColumnTypes`<sup>Required</sup> <a name="ColumnTypes" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypes"></a>

```go
func ColumnTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigSchema</a>

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataList <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataList" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.NewDataAwsccCleanroomsmlTrainingDatasetTrainingDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCleanroomsmlTrainingDatasetTrainingDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.get"></a>

```go
func Get(index *f64) DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference <a name="DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsmltrainingdataset"

dataawscccleanroomsmltrainingdataset.NewDataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfig">InputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingData">DataAwsccCleanroomsmlTrainingDatasetTrainingData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputConfig`<sup>Required</sup> <a name="InputConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfig"></a>

```go
func InputConfig() DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference">DataAwsccCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsmlTrainingDatasetTrainingData
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsmlTrainingDataset.DataAwsccCleanroomsmlTrainingDatasetTrainingData">DataAwsccCleanroomsmlTrainingDatasetTrainingData</a>

---



