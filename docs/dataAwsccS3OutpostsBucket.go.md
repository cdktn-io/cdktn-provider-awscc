# `dataAwsccS3OutpostsBucket` Submodule <a name="`dataAwsccS3OutpostsBucket` Submodule" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3OutpostsBucket <a name="DataAwsccS3OutpostsBucket" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_bucket awscc_s3outposts_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.NewDataAwsccS3OutpostsBucket(scope Construct, id *string, config DataAwsccS3OutpostsBucketConfig) DataAwsccS3OutpostsBucket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig">DataAwsccS3OutpostsBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig">DataAwsccS3OutpostsBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3OutpostsBucket resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.DataAwsccS3OutpostsBucket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.DataAwsccS3OutpostsBucket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.DataAwsccS3OutpostsBucket_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.DataAwsccS3OutpostsBucket_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccS3OutpostsBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccS3OutpostsBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccS3OutpostsBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3OutpostsBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.outpostId">OutpostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList">DataAwsccS3OutpostsBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `LifecycleConfiguration`<sup>Required</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.lifecycleConfiguration"></a>

```go
func LifecycleConfiguration() DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference</a>

---

##### `OutpostId`<sup>Required</sup> <a name="OutpostId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.outpostId"></a>

```go
func OutpostId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.tags"></a>

```go
func Tags() DataAwsccS3OutpostsBucketTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList">DataAwsccS3OutpostsBucketTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3OutpostsBucketConfig <a name="DataAwsccS3OutpostsBucketConfig" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

&dataawsccs3outpostsbucket.DataAwsccS3OutpostsBucketConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_bucket#id DataAwsccS3OutpostsBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3OutpostsBucketLifecycleConfiguration <a name="DataAwsccS3OutpostsBucketLifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

&dataawsccs3outpostsbucket.DataAwsccS3OutpostsBucketLifecycleConfiguration {

}
```


### DataAwsccS3OutpostsBucketLifecycleConfigurationRules <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRules" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

&dataawsccs3outpostsbucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRules {

}
```


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

&dataawsccs3outpostsbucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload {

}
```


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

&dataawsccs3outpostsbucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter {

}
```


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

&dataawsccs3outpostsbucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator {

}
```


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

&dataawsccs3outpostsbucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags {

}
```


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

&dataawsccs3outpostsbucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag {

}
```


### DataAwsccS3OutpostsBucketTags <a name="DataAwsccS3OutpostsBucketTags" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

&dataawsccs3outpostsbucket.DataAwsccS3OutpostsBucketTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.NewDataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfiguration">DataAwsccS3OutpostsBucketLifecycleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.rules"></a>

```go
func Rules() DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3OutpostsBucketLifecycleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfiguration">DataAwsccS3OutpostsBucketLifecycleConfiguration</a>

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.NewDataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">DaysAfterInitiation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysAfterInitiation`<sup>Required</sup> <a name="DaysAfterInitiation" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```go
func DaysAfterInitiation() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.NewDataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tags"></a>

```go
func Tags() DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.NewDataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get"></a>

```go
func Get(index *f64) DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.NewDataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.NewDataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperator">AndOperator</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AndOperator`<sup>Required</sup> <a name="AndOperator" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperator"></a>

```go
func AndOperator() DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tag"></a>

```go
func Tag() DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilter</a>

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.NewDataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.NewDataAwsccS3OutpostsBucketLifecycleConfigurationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.get"></a>

```go
func Get(index *f64) DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference <a name="DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.NewDataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload">AbortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays">ExpirationInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRules">DataAwsccS3OutpostsBucketLifecycleConfigurationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbortIncompleteMultipartUpload`<sup>Required</sup> <a name="AbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload"></a>

```go
func AbortIncompleteMultipartUpload() DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a>

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `ExpirationInDays`<sup>Required</sup> <a name="ExpirationInDays" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays"></a>

```go
func ExpirationInDays() *f64
```

- *Type:* *f64

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filter"></a>

```go
func Filter() DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference">DataAwsccS3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3OutpostsBucketLifecycleConfigurationRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketLifecycleConfigurationRules">DataAwsccS3OutpostsBucketLifecycleConfigurationRules</a>

---


### DataAwsccS3OutpostsBucketTagsList <a name="DataAwsccS3OutpostsBucketTagsList" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.NewDataAwsccS3OutpostsBucketTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3OutpostsBucketTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.get"></a>

```go
func Get(index *f64) DataAwsccS3OutpostsBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3OutpostsBucketTagsOutputReference <a name="DataAwsccS3OutpostsBucketTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsbucket"

dataawsccs3outpostsbucket.NewDataAwsccS3OutpostsBucketTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3OutpostsBucketTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTags">DataAwsccS3OutpostsBucketTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3OutpostsBucketTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsBucket.DataAwsccS3OutpostsBucketTags">DataAwsccS3OutpostsBucketTags</a>

---



