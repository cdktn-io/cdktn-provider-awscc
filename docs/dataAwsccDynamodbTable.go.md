# `dataAwsccDynamodbTable` Submodule <a name="`dataAwsccDynamodbTable` Submodule" id="@cdktn/provider-awscc.dataAwsccDynamodbTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDynamodbTable <a name="DataAwsccDynamodbTable" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dynamodb_table awscc_dynamodb_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTable(scope Construct, id *string, config DataAwsccDynamodbTableConfig) DataAwsccDynamodbTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig">DataAwsccDynamodbTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig">DataAwsccDynamodbTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDynamodbTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.DataAwsccDynamodbTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.DataAwsccDynamodbTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.DataAwsccDynamodbTable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.DataAwsccDynamodbTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDynamodbTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDynamodbTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDynamodbTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dynamodb_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDynamodbTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.attributeDefinitions">AttributeDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList">DataAwsccDynamodbTableAttributeDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.billingMode">BillingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.contributorInsightsSpecification">ContributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference">DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.globalSecondaryIndexes">GlobalSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList">DataAwsccDynamodbTableGlobalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.importSourceSpecification">ImportSourceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference">DataAwsccDynamodbTableImportSourceSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.keySchema">KeySchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.kinesisStreamSpecification">KinesisStreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference">DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.localSecondaryIndexes">LocalSecondaryIndexes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList">DataAwsccDynamodbTableLocalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.onDemandThroughput">OnDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference">DataAwsccDynamodbTableOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.pointInTimeRecoverySpecification">PointInTimeRecoverySpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference">DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference">DataAwsccDynamodbTableProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference">DataAwsccDynamodbTableResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference">DataAwsccDynamodbTableSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.streamSpecification">StreamSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference">DataAwsccDynamodbTableStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.tableClass">TableClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList">DataAwsccDynamodbTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.timeToLiveSpecification">TimeToLiveSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference">DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.warmThroughput">WarmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference">DataAwsccDynamodbTableWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AttributeDefinitions`<sup>Required</sup> <a name="AttributeDefinitions" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.attributeDefinitions"></a>

```go
func AttributeDefinitions() DataAwsccDynamodbTableAttributeDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList">DataAwsccDynamodbTableAttributeDefinitionsList</a>

---

##### `BillingMode`<sup>Required</sup> <a name="BillingMode" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.billingMode"></a>

```go
func BillingMode() *string
```

- *Type:* *string

---

##### `ContributorInsightsSpecification`<sup>Required</sup> <a name="ContributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.contributorInsightsSpecification"></a>

```go
func ContributorInsightsSpecification() DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference">DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference</a>

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `GlobalSecondaryIndexes`<sup>Required</sup> <a name="GlobalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.globalSecondaryIndexes"></a>

```go
func GlobalSecondaryIndexes() DataAwsccDynamodbTableGlobalSecondaryIndexesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList">DataAwsccDynamodbTableGlobalSecondaryIndexesList</a>

---

##### `ImportSourceSpecification`<sup>Required</sup> <a name="ImportSourceSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.importSourceSpecification"></a>

```go
func ImportSourceSpecification() DataAwsccDynamodbTableImportSourceSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference">DataAwsccDynamodbTableImportSourceSpecificationOutputReference</a>

---

##### `KeySchema`<sup>Required</sup> <a name="KeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.keySchema"></a>

```go
func KeySchema() *string
```

- *Type:* *string

---

##### `KinesisStreamSpecification`<sup>Required</sup> <a name="KinesisStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.kinesisStreamSpecification"></a>

```go
func KinesisStreamSpecification() DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference">DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference</a>

---

##### `LocalSecondaryIndexes`<sup>Required</sup> <a name="LocalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.localSecondaryIndexes"></a>

```go
func LocalSecondaryIndexes() DataAwsccDynamodbTableLocalSecondaryIndexesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList">DataAwsccDynamodbTableLocalSecondaryIndexesList</a>

---

##### `OnDemandThroughput`<sup>Required</sup> <a name="OnDemandThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.onDemandThroughput"></a>

```go
func OnDemandThroughput() DataAwsccDynamodbTableOnDemandThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference">DataAwsccDynamodbTableOnDemandThroughputOutputReference</a>

---

##### `PointInTimeRecoverySpecification`<sup>Required</sup> <a name="PointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.pointInTimeRecoverySpecification"></a>

```go
func PointInTimeRecoverySpecification() DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference">DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference</a>

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.provisionedThroughput"></a>

```go
func ProvisionedThroughput() DataAwsccDynamodbTableProvisionedThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference">DataAwsccDynamodbTableProvisionedThroughputOutputReference</a>

---

##### `ResourcePolicy`<sup>Required</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.resourcePolicy"></a>

```go
func ResourcePolicy() DataAwsccDynamodbTableResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference">DataAwsccDynamodbTableResourcePolicyOutputReference</a>

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.sseSpecification"></a>

```go
func SseSpecification() DataAwsccDynamodbTableSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference">DataAwsccDynamodbTableSseSpecificationOutputReference</a>

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `StreamSpecification`<sup>Required</sup> <a name="StreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.streamSpecification"></a>

```go
func StreamSpecification() DataAwsccDynamodbTableStreamSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference">DataAwsccDynamodbTableStreamSpecificationOutputReference</a>

---

##### `TableClass`<sup>Required</sup> <a name="TableClass" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.tableClass"></a>

```go
func TableClass() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.tags"></a>

```go
func Tags() DataAwsccDynamodbTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList">DataAwsccDynamodbTableTagsList</a>

---

##### `TimeToLiveSpecification`<sup>Required</sup> <a name="TimeToLiveSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.timeToLiveSpecification"></a>

```go
func TimeToLiveSpecification() DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference">DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference</a>

---

##### `WarmThroughput`<sup>Required</sup> <a name="WarmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.warmThroughput"></a>

```go
func WarmThroughput() DataAwsccDynamodbTableWarmThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference">DataAwsccDynamodbTableWarmThroughputOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDynamodbTableAttributeDefinitions <a name="DataAwsccDynamodbTableAttributeDefinitions" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableAttributeDefinitions {

}
```


### DataAwsccDynamodbTableConfig <a name="DataAwsccDynamodbTableConfig" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dynamodb_table#id DataAwsccDynamodbTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDynamodbTableContributorInsightsSpecification <a name="DataAwsccDynamodbTableContributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableContributorInsightsSpecification {

}
```


### DataAwsccDynamodbTableGlobalSecondaryIndexes <a name="DataAwsccDynamodbTableGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableGlobalSecondaryIndexes {

}
```


### DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification {

}
```


### DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema {

}
```


### DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput {

}
```


### DataAwsccDynamodbTableGlobalSecondaryIndexesProjection <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjection {

}
```


### DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput {

}
```


### DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput {

}
```


### DataAwsccDynamodbTableImportSourceSpecification <a name="DataAwsccDynamodbTableImportSourceSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableImportSourceSpecification {

}
```


### DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions <a name="DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions {

}
```


### DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv <a name="DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv {

}
```


### DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource <a name="DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource {

}
```


### DataAwsccDynamodbTableKinesisStreamSpecification <a name="DataAwsccDynamodbTableKinesisStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableKinesisStreamSpecification {

}
```


### DataAwsccDynamodbTableLocalSecondaryIndexes <a name="DataAwsccDynamodbTableLocalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableLocalSecondaryIndexes {

}
```


### DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema <a name="DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema {

}
```


### DataAwsccDynamodbTableLocalSecondaryIndexesProjection <a name="DataAwsccDynamodbTableLocalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableLocalSecondaryIndexesProjection {

}
```


### DataAwsccDynamodbTableOnDemandThroughput <a name="DataAwsccDynamodbTableOnDemandThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableOnDemandThroughput {

}
```


### DataAwsccDynamodbTablePointInTimeRecoverySpecification <a name="DataAwsccDynamodbTablePointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTablePointInTimeRecoverySpecification {

}
```


### DataAwsccDynamodbTableProvisionedThroughput <a name="DataAwsccDynamodbTableProvisionedThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableProvisionedThroughput {

}
```


### DataAwsccDynamodbTableResourcePolicy <a name="DataAwsccDynamodbTableResourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableResourcePolicy {

}
```


### DataAwsccDynamodbTableSseSpecification <a name="DataAwsccDynamodbTableSseSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableSseSpecification {

}
```


### DataAwsccDynamodbTableStreamSpecification <a name="DataAwsccDynamodbTableStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableStreamSpecification {

}
```


### DataAwsccDynamodbTableStreamSpecificationResourcePolicy <a name="DataAwsccDynamodbTableStreamSpecificationResourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableStreamSpecificationResourcePolicy {

}
```


### DataAwsccDynamodbTableTags <a name="DataAwsccDynamodbTableTags" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableTags {

}
```


### DataAwsccDynamodbTableTimeToLiveSpecification <a name="DataAwsccDynamodbTableTimeToLiveSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableTimeToLiveSpecification {

}
```


### DataAwsccDynamodbTableWarmThroughput <a name="DataAwsccDynamodbTableWarmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

&dataawsccdynamodbtable.DataAwsccDynamodbTableWarmThroughput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDynamodbTableAttributeDefinitionsList <a name="DataAwsccDynamodbTableAttributeDefinitionsList" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableAttributeDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbTableAttributeDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbTableAttributeDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbTableAttributeDefinitionsOutputReference <a name="DataAwsccDynamodbTableAttributeDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableAttributeDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbTableAttributeDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.property.attributeType">AttributeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitions">DataAwsccDynamodbTableAttributeDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `AttributeType`<sup>Required</sup> <a name="AttributeType" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.property.attributeType"></a>

```go
func AttributeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableAttributeDefinitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableAttributeDefinitions">DataAwsccDynamodbTableAttributeDefinitions</a>

---


### DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference <a name="DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableContributorInsightsSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecification">DataAwsccDynamodbTableContributorInsightsSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableContributorInsightsSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableContributorInsightsSpecification">DataAwsccDynamodbTableContributorInsightsSpecification</a>

---


### DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification">DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification</a>

---


### DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema">DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema">DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema</a>

---


### DataAwsccDynamodbTableGlobalSecondaryIndexesList <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesList" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableGlobalSecondaryIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbTableGlobalSecondaryIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReadRequestUnits`<sup>Required</sup> <a name="MaxReadRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```go
func MaxReadRequestUnits() *f64
```

- *Type:* *f64

---

##### `MaxWriteRequestUnits`<sup>Required</sup> <a name="MaxWriteRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```go
func MaxWriteRequestUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput">DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput</a>

---


### DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification">ContributorInsightsSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchema">KeySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList">DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughput">OnDemandThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference">DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.projection">Projection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference">DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughput">WarmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference">DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexes">DataAwsccDynamodbTableGlobalSecondaryIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContributorInsightsSpecification`<sup>Required</sup> <a name="ContributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification"></a>

```go
func ContributorInsightsSpecification() DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a>

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `KeySchema`<sup>Required</sup> <a name="KeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.keySchema"></a>

```go
func KeySchema() DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList">DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList</a>

---

##### `OnDemandThroughput`<sup>Required</sup> <a name="OnDemandThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.onDemandThroughput"></a>

```go
func OnDemandThroughput() DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference">DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference</a>

---

##### `Projection`<sup>Required</sup> <a name="Projection" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.projection"></a>

```go
func Projection() DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference</a>

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.provisionedThroughput"></a>

```go
func ProvisionedThroughput() DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference">DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference</a>

---

##### `WarmThroughput`<sup>Required</sup> <a name="WarmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.warmThroughput"></a>

```go
func WarmThroughput() DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference">DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableGlobalSecondaryIndexes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexes">DataAwsccDynamodbTableGlobalSecondaryIndexes</a>

---


### DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType">ProjectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjection">DataAwsccDynamodbTableGlobalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NonKeyAttributes`<sup>Required</sup> <a name="NonKeyAttributes" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```go
func NonKeyAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```go
func ProjectionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableGlobalSecondaryIndexesProjection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProjection">DataAwsccDynamodbTableGlobalSecondaryIndexesProjection</a>

---


### DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadCapacityUnits`<sup>Required</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```go
func ReadCapacityUnits() *f64
```

- *Type:* *f64

---

##### `WriteCapacityUnits`<sup>Required</sup> <a name="WriteCapacityUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```go
func WriteCapacityUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput">DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput</a>

---


### DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference <a name="DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond">ReadUnitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond">WriteUnitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput">DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadUnitsPerSecond`<sup>Required</sup> <a name="ReadUnitsPerSecond" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```go
func ReadUnitsPerSecond() *f64
```

- *Type:* *f64

---

##### `WriteUnitsPerSecond`<sup>Required</sup> <a name="WriteUnitsPerSecond" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```go
func WriteUnitsPerSecond() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput">DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput</a>

---


### DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference <a name="DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerList">HeaderList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `HeaderList`<sup>Required</sup> <a name="HeaderList" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.headerList"></a>

```go
func HeaderList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv">DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv</a>

---


### DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference <a name="DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference">DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions">DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.csv"></a>

```go
func Csv() DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference">DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions">DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions</a>

---


### DataAwsccDynamodbTableImportSourceSpecificationOutputReference <a name="DataAwsccDynamodbTableImportSourceSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableImportSourceSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableImportSourceSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionType">InputCompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.inputFormat">InputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptions">InputFormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference">DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSource">S3BucketSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference">DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecification">DataAwsccDynamodbTableImportSourceSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputCompressionType`<sup>Required</sup> <a name="InputCompressionType" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.inputCompressionType"></a>

```go
func InputCompressionType() *string
```

- *Type:* *string

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.inputFormat"></a>

```go
func InputFormat() *string
```

- *Type:* *string

---

##### `InputFormatOptions`<sup>Required</sup> <a name="InputFormatOptions" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.inputFormatOptions"></a>

```go
func InputFormatOptions() DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference">DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference</a>

---

##### `S3BucketSource`<sup>Required</sup> <a name="S3BucketSource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.s3BucketSource"></a>

```go
func S3BucketSource() DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference">DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableImportSourceSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecification">DataAwsccDynamodbTableImportSourceSpecification</a>

---


### DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference <a name="DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwner">S3BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource">DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3BucketOwner"></a>

```go
func S3BucketOwner() *string
```

- *Type:* *string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.s3KeyPrefix"></a>

```go
func S3KeyPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource">DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource</a>

---


### DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference <a name="DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableKinesisStreamSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision">ApproximateCreationDateTimePrecision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecification">DataAwsccDynamodbTableKinesisStreamSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApproximateCreationDateTimePrecision`<sup>Required</sup> <a name="ApproximateCreationDateTimePrecision" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision"></a>

```go
func ApproximateCreationDateTimePrecision() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableKinesisStreamSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableKinesisStreamSpecification">DataAwsccDynamodbTableKinesisStreamSpecification</a>

---


### DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList <a name="DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference <a name="DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema">DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema">DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema</a>

---


### DataAwsccDynamodbTableLocalSecondaryIndexesList <a name="DataAwsccDynamodbTableLocalSecondaryIndexesList" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableLocalSecondaryIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbTableLocalSecondaryIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference <a name="DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableLocalSecondaryIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.property.keySchema">KeySchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList">DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.property.projection">Projection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexes">DataAwsccDynamodbTableLocalSecondaryIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `KeySchema`<sup>Required</sup> <a name="KeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.property.keySchema"></a>

```go
func KeySchema() DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList">DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList</a>

---

##### `Projection`<sup>Required</sup> <a name="Projection" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.property.projection"></a>

```go
func Projection() DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableLocalSecondaryIndexes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexes">DataAwsccDynamodbTableLocalSecondaryIndexes</a>

---


### DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference <a name="DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType">ProjectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjection">DataAwsccDynamodbTableLocalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NonKeyAttributes`<sup>Required</sup> <a name="NonKeyAttributes" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```go
func NonKeyAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```go
func ProjectionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableLocalSecondaryIndexesProjection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableLocalSecondaryIndexesProjection">DataAwsccDynamodbTableLocalSecondaryIndexesProjection</a>

---


### DataAwsccDynamodbTableOnDemandThroughputOutputReference <a name="DataAwsccDynamodbTableOnDemandThroughputOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableOnDemandThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableOnDemandThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughput">DataAwsccDynamodbTableOnDemandThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReadRequestUnits`<sup>Required</sup> <a name="MaxReadRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```go
func MaxReadRequestUnits() *f64
```

- *Type:* *f64

---

##### `MaxWriteRequestUnits`<sup>Required</sup> <a name="MaxWriteRequestUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```go
func MaxWriteRequestUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableOnDemandThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableOnDemandThroughput">DataAwsccDynamodbTableOnDemandThroughput</a>

---


### DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference <a name="DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled">PointInTimeRecoveryEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays">RecoveryPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecification">DataAwsccDynamodbTablePointInTimeRecoverySpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PointInTimeRecoveryEnabled`<sup>Required</sup> <a name="PointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```go
func PointInTimeRecoveryEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RecoveryPeriodInDays`<sup>Required</sup> <a name="RecoveryPeriodInDays" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays"></a>

```go
func RecoveryPeriodInDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTablePointInTimeRecoverySpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTablePointInTimeRecoverySpecification">DataAwsccDynamodbTablePointInTimeRecoverySpecification</a>

---


### DataAwsccDynamodbTableProvisionedThroughputOutputReference <a name="DataAwsccDynamodbTableProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableProvisionedThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableProvisionedThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughput">DataAwsccDynamodbTableProvisionedThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadCapacityUnits`<sup>Required</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```go
func ReadCapacityUnits() *f64
```

- *Type:* *f64

---

##### `WriteCapacityUnits`<sup>Required</sup> <a name="WriteCapacityUnits" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```go
func WriteCapacityUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableProvisionedThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableProvisionedThroughput">DataAwsccDynamodbTableProvisionedThroughput</a>

---


### DataAwsccDynamodbTableResourcePolicyOutputReference <a name="DataAwsccDynamodbTableResourcePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableResourcePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableResourcePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicy">DataAwsccDynamodbTableResourcePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableResourcePolicy">DataAwsccDynamodbTableResourcePolicy</a>

---


### DataAwsccDynamodbTableSseSpecificationOutputReference <a name="DataAwsccDynamodbTableSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableSseSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableSseSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.property.sseEnabled">SseEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.property.sseType">SseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecification">DataAwsccDynamodbTableSseSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.property.kmsMasterKeyId"></a>

```go
func KmsMasterKeyId() *string
```

- *Type:* *string

---

##### `SseEnabled`<sup>Required</sup> <a name="SseEnabled" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.property.sseEnabled"></a>

```go
func SseEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SseType`<sup>Required</sup> <a name="SseType" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.property.sseType"></a>

```go
func SseType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableSseSpecification">DataAwsccDynamodbTableSseSpecification</a>

---


### DataAwsccDynamodbTableStreamSpecificationOutputReference <a name="DataAwsccDynamodbTableStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableStreamSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableStreamSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference">DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.property.streamViewType">StreamViewType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecification">DataAwsccDynamodbTableStreamSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcePolicy`<sup>Required</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.property.resourcePolicy"></a>

```go
func ResourcePolicy() DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference">DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference</a>

---

##### `StreamViewType`<sup>Required</sup> <a name="StreamViewType" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.property.streamViewType"></a>

```go
func StreamViewType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableStreamSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecification">DataAwsccDynamodbTableStreamSpecification</a>

---


### DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference <a name="DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicy">DataAwsccDynamodbTableStreamSpecificationResourcePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableStreamSpecificationResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableStreamSpecificationResourcePolicy">DataAwsccDynamodbTableStreamSpecificationResourcePolicy</a>

---


### DataAwsccDynamodbTableTagsList <a name="DataAwsccDynamodbTableTagsList" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDynamodbTableTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDynamodbTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDynamodbTableTagsOutputReference <a name="DataAwsccDynamodbTableTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDynamodbTableTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTags">DataAwsccDynamodbTableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTags">DataAwsccDynamodbTableTags</a>

---


### DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference <a name="DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableTimeToLiveSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecification">DataAwsccDynamodbTableTimeToLiveSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableTimeToLiveSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableTimeToLiveSpecification">DataAwsccDynamodbTableTimeToLiveSpecification</a>

---


### DataAwsccDynamodbTableWarmThroughputOutputReference <a name="DataAwsccDynamodbTableWarmThroughputOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdynamodbtable"

dataawsccdynamodbtable.NewDataAwsccDynamodbTableWarmThroughputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDynamodbTableWarmThroughputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecond">ReadUnitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecond">WriteUnitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughput">DataAwsccDynamodbTableWarmThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadUnitsPerSecond`<sup>Required</sup> <a name="ReadUnitsPerSecond" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```go
func ReadUnitsPerSecond() *f64
```

- *Type:* *f64

---

##### `WriteUnitsPerSecond`<sup>Required</sup> <a name="WriteUnitsPerSecond" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```go
func WriteUnitsPerSecond() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDynamodbTableWarmThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbTable.DataAwsccDynamodbTableWarmThroughput">DataAwsccDynamodbTableWarmThroughput</a>

---



