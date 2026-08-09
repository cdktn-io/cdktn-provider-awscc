# `dataAwsccS3TablesTableBucket` Submodule <a name="`dataAwsccS3TablesTableBucket` Submodule" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3TablesTableBucket <a name="DataAwsccS3TablesTableBucket" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3tables_table_bucket awscc_s3tables_table_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.NewDataAwsccS3TablesTableBucket(scope Construct, id *string, config DataAwsccS3TablesTableBucketConfig) DataAwsccS3TablesTableBucket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig">DataAwsccS3TablesTableBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig">DataAwsccS3TablesTableBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3TablesTableBucket resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.DataAwsccS3TablesTableBucket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.DataAwsccS3TablesTableBucket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.DataAwsccS3TablesTableBucket_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.DataAwsccS3TablesTableBucket_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccS3TablesTableBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccS3TablesTableBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccS3TablesTableBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3tables_table_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3TablesTableBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference">DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.metricsConfiguration">MetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference">DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference">DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.storageClassConfiguration">StorageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference">DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tableBucketArn">TableBucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tableBucketName">TableBucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList">DataAwsccS3TablesTableBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.unreferencedFileRemoval">UnreferencedFileRemoval</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference">DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference">DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference</a>

---

##### `MetricsConfiguration`<sup>Required</sup> <a name="MetricsConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.metricsConfiguration"></a>

```go
func MetricsConfiguration() DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference">DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference</a>

---

##### `ReplicationConfiguration`<sup>Required</sup> <a name="ReplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.replicationConfiguration"></a>

```go
func ReplicationConfiguration() DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference">DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference</a>

---

##### `StorageClassConfiguration`<sup>Required</sup> <a name="StorageClassConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.storageClassConfiguration"></a>

```go
func StorageClassConfiguration() DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference">DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference</a>

---

##### `TableBucketArn`<sup>Required</sup> <a name="TableBucketArn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tableBucketArn"></a>

```go
func TableBucketArn() *string
```

- *Type:* *string

---

##### `TableBucketName`<sup>Required</sup> <a name="TableBucketName" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tableBucketName"></a>

```go
func TableBucketName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tags"></a>

```go
func Tags() DataAwsccS3TablesTableBucketTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList">DataAwsccS3TablesTableBucketTagsList</a>

---

##### `UnreferencedFileRemoval`<sup>Required</sup> <a name="UnreferencedFileRemoval" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.unreferencedFileRemoval"></a>

```go
func UnreferencedFileRemoval() DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference">DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3TablesTableBucketConfig <a name="DataAwsccS3TablesTableBucketConfig" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

&dataawsccs3tablestablebucket.DataAwsccS3TablesTableBucketConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3tables_table_bucket#id DataAwsccS3TablesTableBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3TablesTableBucketEncryptionConfiguration <a name="DataAwsccS3TablesTableBucketEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

&dataawsccs3tablestablebucket.DataAwsccS3TablesTableBucketEncryptionConfiguration {

}
```


### DataAwsccS3TablesTableBucketMetricsConfiguration <a name="DataAwsccS3TablesTableBucketMetricsConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

&dataawsccs3tablestablebucket.DataAwsccS3TablesTableBucketMetricsConfiguration {

}
```


### DataAwsccS3TablesTableBucketReplicationConfiguration <a name="DataAwsccS3TablesTableBucketReplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

&dataawsccs3tablestablebucket.DataAwsccS3TablesTableBucketReplicationConfiguration {

}
```


### DataAwsccS3TablesTableBucketReplicationConfigurationRules <a name="DataAwsccS3TablesTableBucketReplicationConfigurationRules" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

&dataawsccs3tablestablebucket.DataAwsccS3TablesTableBucketReplicationConfigurationRules {

}
```


### DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations <a name="DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

&dataawsccs3tablestablebucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations {

}
```


### DataAwsccS3TablesTableBucketStorageClassConfiguration <a name="DataAwsccS3TablesTableBucketStorageClassConfiguration" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

&dataawsccs3tablestablebucket.DataAwsccS3TablesTableBucketStorageClassConfiguration {

}
```


### DataAwsccS3TablesTableBucketTags <a name="DataAwsccS3TablesTableBucketTags" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

&dataawsccs3tablestablebucket.DataAwsccS3TablesTableBucketTags {

}
```


### DataAwsccS3TablesTableBucketUnreferencedFileRemoval <a name="DataAwsccS3TablesTableBucketUnreferencedFileRemoval" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemoval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemoval.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

&dataawsccs3tablestablebucket.DataAwsccS3TablesTableBucketUnreferencedFileRemoval {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference <a name="DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.NewDataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm">SseAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfiguration">DataAwsccS3TablesTableBucketEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `SseAlgorithm`<sup>Required</sup> <a name="SseAlgorithm" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm"></a>

```go
func SseAlgorithm() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableBucketEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketEncryptionConfiguration">DataAwsccS3TablesTableBucketEncryptionConfiguration</a>

---


### DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference <a name="DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.NewDataAwsccS3TablesTableBucketMetricsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfiguration">DataAwsccS3TablesTableBucketMetricsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableBucketMetricsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketMetricsConfiguration">DataAwsccS3TablesTableBucketMetricsConfiguration</a>

---


### DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference <a name="DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.NewDataAwsccS3TablesTableBucketReplicationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList">DataAwsccS3TablesTableBucketReplicationConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfiguration">DataAwsccS3TablesTableBucketReplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.rules"></a>

```go
func Rules() DataAwsccS3TablesTableBucketReplicationConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList">DataAwsccS3TablesTableBucketReplicationConfigurationRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableBucketReplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfiguration">DataAwsccS3TablesTableBucketReplicationConfiguration</a>

---


### DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList <a name="DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.NewDataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.get"></a>

```go
func Get(index *f64) DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference <a name="DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.NewDataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArn">DestinationTableBucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations">DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationTableBucketArn`<sup>Required</sup> <a name="DestinationTableBucketArn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArn"></a>

```go
func DestinationTableBucketArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations">DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinations</a>

---


### DataAwsccS3TablesTableBucketReplicationConfigurationRulesList <a name="DataAwsccS3TablesTableBucketReplicationConfigurationRulesList" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.NewDataAwsccS3TablesTableBucketReplicationConfigurationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3TablesTableBucketReplicationConfigurationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.get"></a>

```go
func Get(index *f64) DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference <a name="DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.NewDataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList">DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRules">DataAwsccS3TablesTableBucketReplicationConfigurationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinations"></a>

```go
func Destinations() DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList">DataAwsccS3TablesTableBucketReplicationConfigurationRulesDestinationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableBucketReplicationConfigurationRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketReplicationConfigurationRules">DataAwsccS3TablesTableBucketReplicationConfigurationRules</a>

---


### DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference <a name="DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.NewDataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfiguration">DataAwsccS3TablesTableBucketStorageClassConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableBucketStorageClassConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketStorageClassConfiguration">DataAwsccS3TablesTableBucketStorageClassConfiguration</a>

---


### DataAwsccS3TablesTableBucketTagsList <a name="DataAwsccS3TablesTableBucketTagsList" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.NewDataAwsccS3TablesTableBucketTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3TablesTableBucketTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.get"></a>

```go
func Get(index *f64) DataAwsccS3TablesTableBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3TablesTableBucketTagsOutputReference <a name="DataAwsccS3TablesTableBucketTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.NewDataAwsccS3TablesTableBucketTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3TablesTableBucketTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTags">DataAwsccS3TablesTableBucketTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableBucketTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketTags">DataAwsccS3TablesTableBucketTags</a>

---


### DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference <a name="DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3tablestablebucket"

dataawsccs3tablestablebucket.NewDataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDays">NoncurrentDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDays">UnreferencedDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemoval">DataAwsccS3TablesTableBucketUnreferencedFileRemoval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NoncurrentDays`<sup>Required</sup> <a name="NoncurrentDays" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDays"></a>

```go
func NoncurrentDays() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UnreferencedDays`<sup>Required</sup> <a name="UnreferencedDays" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDays"></a>

```go
func UnreferencedDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemovalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3TablesTableBucketUnreferencedFileRemoval
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3TablesTableBucket.DataAwsccS3TablesTableBucketUnreferencedFileRemoval">DataAwsccS3TablesTableBucketUnreferencedFileRemoval</a>

---



