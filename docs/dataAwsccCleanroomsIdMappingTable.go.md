# `dataAwsccCleanroomsIdMappingTable` Submodule <a name="`dataAwsccCleanroomsIdMappingTable` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsIdMappingTable <a name="DataAwsccCleanroomsIdMappingTable" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanrooms_id_mapping_table awscc_cleanrooms_id_mapping_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

dataawscccleanroomsidmappingtable.NewDataAwsccCleanroomsIdMappingTable(scope Construct, id *string, config DataAwsccCleanroomsIdMappingTableConfig) DataAwsccCleanroomsIdMappingTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig">DataAwsccCleanroomsIdMappingTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig">DataAwsccCleanroomsIdMappingTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsIdMappingTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

dataawscccleanroomsidmappingtable.DataAwsccCleanroomsIdMappingTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

dataawscccleanroomsidmappingtable.DataAwsccCleanroomsIdMappingTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

dataawscccleanroomsidmappingtable.DataAwsccCleanroomsIdMappingTable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

dataawscccleanroomsidmappingtable.DataAwsccCleanroomsIdMappingTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCleanroomsIdMappingTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCleanroomsIdMappingTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCleanroomsIdMappingTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanrooms_id_mapping_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsIdMappingTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.collaborationArn">CollaborationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.idMappingTableIdentifier">IdMappingTableIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.inputReferenceConfig">InputReferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference">DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.inputReferenceProperties">InputReferenceProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference">DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.membershipArn">MembershipArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList">DataAwsccCleanroomsIdMappingTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CollaborationArn`<sup>Required</sup> <a name="CollaborationArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.collaborationArn"></a>

```go
func CollaborationArn() *string
```

- *Type:* *string

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.collaborationIdentifier"></a>

```go
func CollaborationIdentifier() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IdMappingTableIdentifier`<sup>Required</sup> <a name="IdMappingTableIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.idMappingTableIdentifier"></a>

```go
func IdMappingTableIdentifier() *string
```

- *Type:* *string

---

##### `InputReferenceConfig`<sup>Required</sup> <a name="InputReferenceConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.inputReferenceConfig"></a>

```go
func InputReferenceConfig() DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference">DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference</a>

---

##### `InputReferenceProperties`<sup>Required</sup> <a name="InputReferenceProperties" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.inputReferenceProperties"></a>

```go
func InputReferenceProperties() DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference">DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference</a>

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `MembershipArn`<sup>Required</sup> <a name="MembershipArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.membershipArn"></a>

```go
func MembershipArn() *string
```

- *Type:* *string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.membershipIdentifier"></a>

```go
func MembershipIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.tags"></a>

```go
func Tags() DataAwsccCleanroomsIdMappingTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList">DataAwsccCleanroomsIdMappingTableTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsIdMappingTableConfig <a name="DataAwsccCleanroomsIdMappingTableConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

&dataawscccleanroomsidmappingtable.DataAwsccCleanroomsIdMappingTableConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanrooms_id_mapping_table#id DataAwsccCleanroomsIdMappingTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsIdMappingTableInputReferenceConfig <a name="DataAwsccCleanroomsIdMappingTableInputReferenceConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

&dataawscccleanroomsidmappingtable.DataAwsccCleanroomsIdMappingTableInputReferenceConfig {

}
```


### DataAwsccCleanroomsIdMappingTableInputReferenceProperties <a name="DataAwsccCleanroomsIdMappingTableInputReferenceProperties" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

&dataawscccleanroomsidmappingtable.DataAwsccCleanroomsIdMappingTableInputReferenceProperties {

}
```


### DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource <a name="DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

&dataawscccleanroomsidmappingtable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource {

}
```


### DataAwsccCleanroomsIdMappingTableTags <a name="DataAwsccCleanroomsIdMappingTableTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

&dataawscccleanroomsidmappingtable.DataAwsccCleanroomsIdMappingTableTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference <a name="DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

dataawscccleanroomsidmappingtable.NewDataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.inputReferenceArn">InputReferenceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.manageResourcePolicies">ManageResourcePolicies</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfig">DataAwsccCleanroomsIdMappingTableInputReferenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputReferenceArn`<sup>Required</sup> <a name="InputReferenceArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.inputReferenceArn"></a>

```go
func InputReferenceArn() *string
```

- *Type:* *string

---

##### `ManageResourcePolicies`<sup>Required</sup> <a name="ManageResourcePolicies" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.manageResourcePolicies"></a>

```go
func ManageResourcePolicies() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsIdMappingTableInputReferenceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfig">DataAwsccCleanroomsIdMappingTableInputReferenceConfig</a>

---


### DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList <a name="DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

dataawscccleanroomsidmappingtable.NewDataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.get"></a>

```go
func Get(index *f64) DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference <a name="DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

dataawscccleanroomsidmappingtable.NewDataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.idNamespaceAssociationId">IdNamespaceAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource">DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdNamespaceAssociationId`<sup>Required</sup> <a name="IdNamespaceAssociationId" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.idNamespaceAssociationId"></a>

```go
func IdNamespaceAssociationId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource">DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource</a>

---


### DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference <a name="DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

dataawscccleanroomsidmappingtable.NewDataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.idMappingTableInputSource">IdMappingTableInputSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList">DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceProperties">DataAwsccCleanroomsIdMappingTableInputReferenceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdMappingTableInputSource`<sup>Required</sup> <a name="IdMappingTableInputSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.idMappingTableInputSource"></a>

```go
func IdMappingTableInputSource() DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList">DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsIdMappingTableInputReferenceProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceProperties">DataAwsccCleanroomsIdMappingTableInputReferenceProperties</a>

---


### DataAwsccCleanroomsIdMappingTableTagsList <a name="DataAwsccCleanroomsIdMappingTableTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

dataawscccleanroomsidmappingtable.NewDataAwsccCleanroomsIdMappingTableTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCleanroomsIdMappingTableTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCleanroomsIdMappingTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCleanroomsIdMappingTableTagsOutputReference <a name="DataAwsccCleanroomsIdMappingTableTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccleanroomsidmappingtable"

dataawscccleanroomsidmappingtable.NewDataAwsccCleanroomsIdMappingTableTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCleanroomsIdMappingTableTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTags">DataAwsccCleanroomsIdMappingTableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCleanroomsIdMappingTableTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTags">DataAwsccCleanroomsIdMappingTableTags</a>

---



