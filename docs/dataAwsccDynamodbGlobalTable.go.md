# `dataAwsccDynamodbGlobalTable` Submodule <a name="`dataAwsccDynamodbGlobalTable` Submodule" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDynamodbGlobalTable <a name="DataAwsccDynamodbGlobalTable" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dynamodb_global_table awscc_dynamodb_global_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTable(scope Construct, id *string, config DataAwsccDynamodbGlobalTableConfig) DataAwsccDynamodbGlobalTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig">DataAwsccDynamodbGlobalTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig">DataAwsccDynamodbGlobalTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDynamodbGlobalTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDynamodbGlobalTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDynamodbGlobalTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDynamodbGlobalTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dynamodb_global_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDynamodbGlobalTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.attributeDefinitions">AttributeDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList">DataAwsccDynamodbGlobalTableAttributeDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.billingMode">BillingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalSecondaryIndexes">GlobalSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalTableSourceArn">GlobalTableSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalTableWitnesses">GlobalTableWitnesses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList">DataAwsccDynamodbGlobalTableGlobalTableWitnessesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.keySchema">KeySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList">DataAwsccDynamodbGlobalTableKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.localSecondaryIndexes">LocalSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.multiRegionConsistency">MultiRegionConsistency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.readOnDemandThroughputSettings">ReadOnDemandThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.readProvisionedThroughputSettings">ReadProvisionedThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.replicas">Replicas</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList">DataAwsccDynamodbGlobalTableReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference">DataAwsccDynamodbGlobalTableSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.streamSpecification">StreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.timeToLiveSpecification">TimeToLiveSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference">DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.warmThroughput">WarmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference">DataAwsccDynamodbGlobalTableWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.writeOnDemandThroughputSettings">WriteOnDemandThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.writeProvisionedThroughputSettings">WriteProvisionedThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AttributeDefinitions`<sup>Required</sup> <a name="AttributeDefinitions" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.attributeDefinitions"></a>

```go
func AttributeDefinitions() DataAwsccDynamodbGlobalTableAttributeDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList">DataAwsccDynamodbGlobalTableAttributeDefinitionsList</a>

---

##### `BillingMode`<sup>Required</sup> <a name="BillingMode" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.billingMode"></a>

```go
func BillingMode() *string
```

- *Type:* *string

---

##### `GlobalSecondaryIndexes`<sup>Required</sup> <a name="GlobalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalSecondaryIndexes"></a>

```go
func GlobalSecondaryIndexes() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList</a>

---

##### `GlobalTableSourceArn`<sup>Required</sup> <a name="GlobalTableSourceArn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalTableSourceArn"></a>

```go
func GlobalTableSourceArn() *string
```

- *Type:* *string

---

##### `GlobalTableWitnesses`<sup>Required</sup> <a name="GlobalTableWitnesses" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalTableWitnesses"></a>

```go
func GlobalTableWitnesses() DataAwsccDynamodbGlobalTableGlobalTableWitnessesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList">DataAwsccDynamodbGlobalTableGlobalTableWitnessesList</a>

---

##### `KeySchema`<sup>Required</sup> <a name="KeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.keySchema"></a>

```go
func KeySchema() DataAwsccDynamodbGlobalTableKeySchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList">DataAwsccDynamodbGlobalTableKeySchemaList</a>

---

##### `LocalSecondaryIndexes`<sup>Required</sup> <a name="LocalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.localSecondaryIndexes"></a>

```go
func LocalSecondaryIndexes() DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList</a>

---

##### `MultiRegionConsistency`<sup>Required</sup> <a name="MultiRegionConsistency" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.multiRegionConsistency"></a>

```go
func MultiRegionConsistency() *string
```

- *Type:* *string

---

##### `ReadOnDemandThroughputSettings`<sup>Required</sup> <a name="ReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.readOnDemandThroughputSettings"></a>

```go
func ReadOnDemandThroughputSettings() DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference</a>

---

##### `ReadProvisionedThroughputSettings`<sup>Required</sup> <a name="ReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.readProvisionedThroughputSettings"></a>

```go
func ReadProvisionedThroughputSettings() DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference</a>

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.replicas"></a>

```go
func Replicas() DataAwsccDynamodbGlobalTableReplicasList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList">DataAwsccDynamodbGlobalTableReplicasList</a>

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.sseSpecification"></a>

```go
func SseSpecification() DataAwsccDynamodbGlobalTableSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference">DataAwsccDynamodbGlobalTableSseSpecificationOutputReference</a>

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `StreamSpecification`<sup>Required</sup> <a name="StreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.streamSpecification"></a>

```go
func StreamSpecification() DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference</a>

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `TimeToLiveSpecification`<sup>Required</sup> <a name="TimeToLiveSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.timeToLiveSpecification"></a>

```go
func TimeToLiveSpecification() DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference">DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference</a>

---

##### `WarmThroughput`<sup>Required</sup> <a name="WarmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.warmThroughput"></a>

```go
func WarmThroughput() DataAwsccDynamodbGlobalTableWarmThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference">DataAwsccDynamodbGlobalTableWarmThroughputOutputReference</a>

---

##### `WriteOnDemandThroughputSettings`<sup>Required</sup> <a name="WriteOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.writeOnDemandThroughputSettings"></a>

```go
func WriteOnDemandThroughputSettings() DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference</a>

---

##### `WriteProvisionedThroughputSettings`<sup>Required</sup> <a name="WriteProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.writeProvisionedThroughputSettings"></a>

```go
func WriteProvisionedThroughputSettings() DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDynamodbGlobalTableAttributeDefinitions <a name="DataAwsccDynamodbGlobalTableAttributeDefinitions" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableAttributeDefinitions {

}
```


### DataAwsccDynamodbGlobalTableConfig <a name="DataAwsccDynamodbGlobalTableConfig" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/dynamodb_global_table#id DataAwsccDynamodbGlobalTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes {

}
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema {

}
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection {

}
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings {

}
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings {

}
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput {

}
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings {

}
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings {

}
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings {

}
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {

}
```


### DataAwsccDynamodbGlobalTableGlobalTableWitnesses <a name="DataAwsccDynamodbGlobalTableGlobalTableWitnesses" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses {

}
```


### DataAwsccDynamodbGlobalTableKeySchema <a name="DataAwsccDynamodbGlobalTableKeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableKeySchema {

}
```


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexes <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes {

}
```


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema {

}
```


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection {

}
```


### DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings {

}
```


### DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings {

}
```


### DataAwsccDynamodbGlobalTableReplicas <a name="DataAwsccDynamodbGlobalTableReplicas" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicas.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicas {

}
```


### DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification <a name="DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification {

}
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes {

}
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification {

}
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings {

}
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings {

}
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings {

}
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {

}
```


### DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification <a name="DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification {

}
```


### DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification <a name="DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification {

}
```


### DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings {

}
```


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings {

}
```


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings {

}
```


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {

}
```


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification {

}
```


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy {

}
```


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags {

}
```


### DataAwsccDynamodbGlobalTableReplicasResourcePolicy <a name="DataAwsccDynamodbGlobalTableReplicasResourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy {

}
```


### DataAwsccDynamodbGlobalTableReplicasSseSpecification <a name="DataAwsccDynamodbGlobalTableReplicasSseSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasSseSpecification {

}
```


### DataAwsccDynamodbGlobalTableReplicasTags <a name="DataAwsccDynamodbGlobalTableReplicasTags" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableReplicasTags {

}
```


### DataAwsccDynamodbGlobalTableSseSpecification <a name="DataAwsccDynamodbGlobalTableSseSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableSseSpecification {

}
```


### DataAwsccDynamodbGlobalTableStreamSpecification <a name="DataAwsccDynamodbGlobalTableStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableStreamSpecification {

}
```


### DataAwsccDynamodbGlobalTableTimeToLiveSpecification <a name="DataAwsccDynamodbGlobalTableTimeToLiveSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification {

}
```


### DataAwsccDynamodbGlobalTableWarmThroughput <a name="DataAwsccDynamodbGlobalTableWarmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableWarmThroughput {

}
```


### DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings {

}
```


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings {

}
```


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings {

}
```


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

&dataawsccdynamodbglobaltable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDynamodbGlobalTableAttributeDefinitionsList <a name="DataAwsccDynamodbGlobalTableAttributeDefinitionsList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableAttributeDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbGlobalTableAttributeDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference <a name="DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.attributeType">AttributeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitions">DataAwsccDynamodbGlobalTableAttributeDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `AttributeType`<sup>Required</sup> <a name="AttributeType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.attributeType"></a>

```go
func AttributeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableAttributeDefinitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitions">DataAwsccDynamodbGlobalTableAttributeDefinitions</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.keySchema">KeySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.projection">Projection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.readOnDemandThroughputSettings">ReadOnDemandThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.readProvisionedThroughputSettings">ReadProvisionedThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.warmThroughput">WarmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.writeOnDemandThroughputSettings">WriteOnDemandThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.writeProvisionedThroughputSettings">WriteProvisionedThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `KeySchema`<sup>Required</sup> <a name="KeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.keySchema"></a>

```go
func KeySchema() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList</a>

---

##### `Projection`<sup>Required</sup> <a name="Projection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.projection"></a>

```go
func Projection() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference</a>

---

##### `ReadOnDemandThroughputSettings`<sup>Required</sup> <a name="ReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.readOnDemandThroughputSettings"></a>

```go
func ReadOnDemandThroughputSettings() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference</a>

---

##### `ReadProvisionedThroughputSettings`<sup>Required</sup> <a name="ReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.readProvisionedThroughputSettings"></a>

```go
func ReadProvisionedThroughputSettings() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference</a>

---

##### `WarmThroughput`<sup>Required</sup> <a name="WarmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.warmThroughput"></a>

```go
func WarmThroughput() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference</a>

---

##### `WriteOnDemandThroughputSettings`<sup>Required</sup> <a name="WriteOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.writeOnDemandThroughputSettings"></a>

```go
func WriteOnDemandThroughputSettings() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference</a>

---

##### `WriteProvisionedThroughputSettings`<sup>Required</sup> <a name="WriteProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.writeProvisionedThroughputSettings"></a>

```go
func WriteProvisionedThroughputSettings() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType">ProjectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NonKeyAttributes`<sup>Required</sup> <a name="NonKeyAttributes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```go
func NonKeyAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```go
func ProjectionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReadRequestUnits`<sup>Required</sup> <a name="MaxReadRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits"></a>

```go
func MaxReadRequestUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadCapacityUnits`<sup>Required</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits"></a>

```go
func ReadCapacityUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond">ReadUnitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond">WriteUnitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadUnitsPerSecond`<sup>Required</sup> <a name="ReadUnitsPerSecond" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```go
func ReadUnitsPerSecond() *f64
```

- *Type:* *f64

---

##### `WriteUnitsPerSecond`<sup>Required</sup> <a name="WriteUnitsPerSecond" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```go
func WriteUnitsPerSecond() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxWriteRequestUnits`<sup>Required</sup> <a name="MaxWriteRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.maxWriteRequestUnits"></a>

```go
func MaxWriteRequestUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.writeCapacityAutoScalingSettings">WriteCapacityAutoScalingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WriteCapacityAutoScalingSettings`<sup>Required</sup> <a name="WriteCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.writeCapacityAutoScalingSettings"></a>

```go
func WriteCapacityAutoScalingSettings() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.seedCapacity">SeedCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration">TargetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `SeedCapacity`<sup>Required</sup> <a name="SeedCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.seedCapacity"></a>

```go
func SeedCapacity() *f64
```

- *Type:* *f64

---

##### `TargetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="TargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```go
func TargetTrackingScalingPolicyConfiguration() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">DisableScaleIn</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">ScaleInCooldown</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">ScaleOutCooldown</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableScaleIn`<sup>Required</sup> <a name="DisableScaleIn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```go
func DisableScaleIn() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ScaleInCooldown`<sup>Required</sup> <a name="ScaleInCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```go
func ScaleInCooldown() *f64
```

- *Type:* *f64

---

##### `ScaleOutCooldown`<sup>Required</sup> <a name="ScaleOutCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```go
func ScaleOutCooldown() *f64
```

- *Type:* *f64

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```go
func TargetValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a>

---


### DataAwsccDynamodbGlobalTableGlobalTableWitnessesList <a name="DataAwsccDynamodbGlobalTableGlobalTableWitnessesList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalTableWitnessesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbGlobalTableGlobalTableWitnessesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses">DataAwsccDynamodbGlobalTableGlobalTableWitnesses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableGlobalTableWitnesses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses">DataAwsccDynamodbGlobalTableGlobalTableWitnesses</a>

---


### DataAwsccDynamodbGlobalTableKeySchemaList <a name="DataAwsccDynamodbGlobalTableKeySchemaList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableKeySchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbGlobalTableKeySchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbGlobalTableKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbGlobalTableKeySchemaOutputReference <a name="DataAwsccDynamodbGlobalTableKeySchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableKeySchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbGlobalTableKeySchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchema">DataAwsccDynamodbGlobalTableKeySchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableKeySchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchema">DataAwsccDynamodbGlobalTableKeySchema</a>

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema</a>

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableLocalSecondaryIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.keySchema">KeySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.projection">Projection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes">DataAwsccDynamodbGlobalTableLocalSecondaryIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `KeySchema`<sup>Required</sup> <a name="KeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.keySchema"></a>

```go
func KeySchema() DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList</a>

---

##### `Projection`<sup>Required</sup> <a name="Projection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.projection"></a>

```go
func Projection() DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableLocalSecondaryIndexes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes">DataAwsccDynamodbGlobalTableLocalSecondaryIndexes</a>

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType">ProjectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NonKeyAttributes`<sup>Required</sup> <a name="NonKeyAttributes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```go
func NonKeyAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```go
func ProjectionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection</a>

---


### DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReadRequestUnits`<sup>Required</sup> <a name="MaxReadRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits"></a>

```go
func MaxReadRequestUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadCapacityUnits`<sup>Required</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits"></a>

```go
func ReadCapacityUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification">DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification">DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification">ContributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.readOnDemandThroughputSettings">ReadOnDemandThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.readProvisionedThroughputSettings">ReadProvisionedThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContributorInsightsSpecification`<sup>Required</sup> <a name="ContributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification"></a>

```go
func ContributorInsightsSpecification() DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a>

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `ReadOnDemandThroughputSettings`<sup>Required</sup> <a name="ReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.readOnDemandThroughputSettings"></a>

```go
func ReadOnDemandThroughputSettings() DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference</a>

---

##### `ReadProvisionedThroughputSettings`<sup>Required</sup> <a name="ReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.readProvisionedThroughputSettings"></a>

```go
func ReadProvisionedThroughputSettings() DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReadRequestUnits`<sup>Required</sup> <a name="MaxReadRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits"></a>

```go
func MaxReadRequestUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityAutoScalingSettings">ReadCapacityAutoScalingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadCapacityAutoScalingSettings`<sup>Required</sup> <a name="ReadCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityAutoScalingSettings"></a>

```go
func ReadCapacityAutoScalingSettings() DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference</a>

---

##### `ReadCapacityUnits`<sup>Required</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits"></a>

```go
func ReadCapacityUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.seedCapacity">SeedCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration">TargetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `SeedCapacity`<sup>Required</sup> <a name="SeedCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.seedCapacity"></a>

```go
func SeedCapacity() *f64
```

- *Type:* *f64

---

##### `TargetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="TargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```go
func TargetTrackingScalingPolicyConfiguration() DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">DisableScaleIn</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">ScaleInCooldown</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">ScaleOutCooldown</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableScaleIn`<sup>Required</sup> <a name="DisableScaleIn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```go
func DisableScaleIn() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ScaleInCooldown`<sup>Required</sup> <a name="ScaleInCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```go
func ScaleInCooldown() *f64
```

- *Type:* *f64

---

##### `ScaleOutCooldown`<sup>Required</sup> <a name="ScaleOutCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```go
func ScaleOutCooldown() *f64
```

- *Type:* *f64

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```go
func TargetValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a>

---


### DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision">ApproximateCreationDateTimePrecision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification">DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApproximateCreationDateTimePrecision`<sup>Required</sup> <a name="ApproximateCreationDateTimePrecision" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision"></a>

```go
func ApproximateCreationDateTimePrecision() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification">DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasList <a name="DataAwsccDynamodbGlobalTableReplicasList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbGlobalTableReplicasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbGlobalTableReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbGlobalTableReplicasOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbGlobalTableReplicasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.contributorInsightsSpecification">ContributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.globalSecondaryIndexes">GlobalSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.globalTableSettingsReplicationMode">GlobalTableSettingsReplicationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.kinesisStreamSpecification">KinesisStreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.pointInTimeRecoverySpecification">PointInTimeRecoverySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.readOnDemandThroughputSettings">ReadOnDemandThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.readProvisionedThroughputSettings">ReadProvisionedThroughputSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.replicaStreamSpecification">ReplicaStreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference">DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.tableClass">TableClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList">DataAwsccDynamodbGlobalTableReplicasTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicas">DataAwsccDynamodbGlobalTableReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContributorInsightsSpecification`<sup>Required</sup> <a name="ContributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.contributorInsightsSpecification"></a>

```go
func ContributorInsightsSpecification() DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference</a>

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `GlobalSecondaryIndexes`<sup>Required</sup> <a name="GlobalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.globalSecondaryIndexes"></a>

```go
func GlobalSecondaryIndexes() DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList</a>

---

##### `GlobalTableSettingsReplicationMode`<sup>Required</sup> <a name="GlobalTableSettingsReplicationMode" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.globalTableSettingsReplicationMode"></a>

```go
func GlobalTableSettingsReplicationMode() *string
```

- *Type:* *string

---

##### `KinesisStreamSpecification`<sup>Required</sup> <a name="KinesisStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.kinesisStreamSpecification"></a>

```go
func KinesisStreamSpecification() DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference</a>

---

##### `PointInTimeRecoverySpecification`<sup>Required</sup> <a name="PointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.pointInTimeRecoverySpecification"></a>

```go
func PointInTimeRecoverySpecification() DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference</a>

---

##### `ReadOnDemandThroughputSettings`<sup>Required</sup> <a name="ReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.readOnDemandThroughputSettings"></a>

```go
func ReadOnDemandThroughputSettings() DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference</a>

---

##### `ReadProvisionedThroughputSettings`<sup>Required</sup> <a name="ReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.readProvisionedThroughputSettings"></a>

```go
func ReadProvisionedThroughputSettings() DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReplicaStreamSpecification`<sup>Required</sup> <a name="ReplicaStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.replicaStreamSpecification"></a>

```go
func ReplicaStreamSpecification() DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference</a>

---

##### `ResourcePolicy`<sup>Required</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.resourcePolicy"></a>

```go
func ResourcePolicy() DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference">DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference</a>

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.sseSpecification"></a>

```go
func SseSpecification() DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference</a>

---

##### `TableClass`<sup>Required</sup> <a name="TableClass" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.tableClass"></a>

```go
func TableClass() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.tags"></a>

```go
func Tags() DataAwsccDynamodbGlobalTableReplicasTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList">DataAwsccDynamodbGlobalTableReplicasTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicas
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicas">DataAwsccDynamodbGlobalTableReplicas</a>

---


### DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled">PointInTimeRecoveryEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays">RecoveryPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification">DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PointInTimeRecoveryEnabled`<sup>Required</sup> <a name="PointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```go
func PointInTimeRecoveryEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RecoveryPeriodInDays`<sup>Required</sup> <a name="RecoveryPeriodInDays" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays"></a>

```go
func RecoveryPeriodInDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification">DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReadRequestUnits`<sup>Required</sup> <a name="MaxReadRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits"></a>

```go
func MaxReadRequestUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.readCapacityAutoScalingSettings">ReadCapacityAutoScalingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadCapacityAutoScalingSettings`<sup>Required</sup> <a name="ReadCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.readCapacityAutoScalingSettings"></a>

```go
func ReadCapacityAutoScalingSettings() DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference</a>

---

##### `ReadCapacityUnits`<sup>Required</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits"></a>

```go
func ReadCapacityUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.seedCapacity">SeedCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration">TargetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `SeedCapacity`<sup>Required</sup> <a name="SeedCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.seedCapacity"></a>

```go
func SeedCapacity() *f64
```

- *Type:* *f64

---

##### `TargetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="TargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```go
func TargetTrackingScalingPolicyConfiguration() DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">DisableScaleIn</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">ScaleInCooldown</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">ScaleOutCooldown</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableScaleIn`<sup>Required</sup> <a name="DisableScaleIn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```go
func DisableScaleIn() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ScaleInCooldown`<sup>Required</sup> <a name="ScaleInCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```go
func ScaleInCooldown() *f64
```

- *Type:* *f64

---

##### `ScaleOutCooldown`<sup>Required</sup> <a name="ScaleOutCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```go
func ScaleOutCooldown() *f64
```

- *Type:* *f64

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```go
func TargetValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a>

---


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcePolicy`<sup>Required</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.resourcePolicy"></a>

```go
func ResourcePolicy() DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.tags"></a>

```go
func Tags() DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy</a>

---


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags</a>

---


### DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy">DataAwsccDynamodbGlobalTableReplicasResourcePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy">DataAwsccDynamodbGlobalTableReplicasResourcePolicy</a>

---


### DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecification">DataAwsccDynamodbGlobalTableReplicasSseSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.kmsMasterKeyId"></a>

```go
func KmsMasterKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecification">DataAwsccDynamodbGlobalTableReplicasSseSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasTagsList <a name="DataAwsccDynamodbGlobalTableReplicasTagsList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbGlobalTableReplicasTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbGlobalTableReplicasTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbGlobalTableReplicasTagsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableReplicasTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbGlobalTableReplicasTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTags">DataAwsccDynamodbGlobalTableReplicasTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableReplicasTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTags">DataAwsccDynamodbGlobalTableReplicasTags</a>

---


### DataAwsccDynamodbGlobalTableSseSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableSseSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableSseSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.sseEnabled">SseEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.sseType">SseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecification">DataAwsccDynamodbGlobalTableSseSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SseEnabled`<sup>Required</sup> <a name="SseEnabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.sseEnabled"></a>

```go
func SseEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SseType`<sup>Required</sup> <a name="SseType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.sseType"></a>

```go
func SseType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecification">DataAwsccDynamodbGlobalTableSseSpecification</a>

---


### DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableStreamSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.streamViewType">StreamViewType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecification">DataAwsccDynamodbGlobalTableStreamSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamViewType`<sup>Required</sup> <a name="StreamViewType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.streamViewType"></a>

```go
func StreamViewType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableStreamSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecification">DataAwsccDynamodbGlobalTableStreamSpecification</a>

---


### DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification">DataAwsccDynamodbGlobalTableTimeToLiveSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableTimeToLiveSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification">DataAwsccDynamodbGlobalTableTimeToLiveSpecification</a>

---


### DataAwsccDynamodbGlobalTableWarmThroughputOutputReference <a name="DataAwsccDynamodbGlobalTableWarmThroughputOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableWarmThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableWarmThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.readUnitsPerSecond">ReadUnitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.writeUnitsPerSecond">WriteUnitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughput">DataAwsccDynamodbGlobalTableWarmThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadUnitsPerSecond`<sup>Required</sup> <a name="ReadUnitsPerSecond" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```go
func ReadUnitsPerSecond() *f64
```

- *Type:* *f64

---

##### `WriteUnitsPerSecond`<sup>Required</sup> <a name="WriteUnitsPerSecond" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```go
func WriteUnitsPerSecond() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableWarmThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughput">DataAwsccDynamodbGlobalTableWarmThroughput</a>

---


### DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxWriteRequestUnits`<sup>Required</sup> <a name="MaxWriteRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.maxWriteRequestUnits"></a>

```go
func MaxWriteRequestUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.writeCapacityAutoScalingSettings">WriteCapacityAutoScalingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WriteCapacityAutoScalingSettings`<sup>Required</sup> <a name="WriteCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.writeCapacityAutoScalingSettings"></a>

```go
func WriteCapacityAutoScalingSettings() DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.seedCapacity">SeedCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration">TargetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `SeedCapacity`<sup>Required</sup> <a name="SeedCapacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.seedCapacity"></a>

```go
func SeedCapacity() *f64
```

- *Type:* *f64

---

##### `TargetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="TargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```go
func TargetTrackingScalingPolicyConfiguration() DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings</a>

---


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbglobaltable"

dataawsccdynamodbglobaltable.NewDataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">DisableScaleIn</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">ScaleInCooldown</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">ScaleOutCooldown</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableScaleIn`<sup>Required</sup> <a name="DisableScaleIn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```go
func DisableScaleIn() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ScaleInCooldown`<sup>Required</sup> <a name="ScaleInCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```go
func ScaleInCooldown() *f64
```

- *Type:* *f64

---

##### `ScaleOutCooldown`<sup>Required</sup> <a name="ScaleOutCooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```go
func ScaleOutCooldown() *f64
```

- *Type:* *f64

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```go
func TargetValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a>

---



