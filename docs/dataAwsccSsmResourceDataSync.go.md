# `dataAwsccSsmResourceDataSync` Submodule <a name="`dataAwsccSsmResourceDataSync` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmResourceDataSync <a name="DataAwsccSsmResourceDataSync" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_resource_data_sync awscc_ssm_resource_data_sync}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmresourcedatasync"

dataawsccssmresourcedatasync.NewDataAwsccSsmResourceDataSync(scope Construct, id *string, config DataAwsccSsmResourceDataSyncConfig) DataAwsccSsmResourceDataSync
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig">DataAwsccSsmResourceDataSyncConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig">DataAwsccSsmResourceDataSyncConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmResourceDataSync resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmresourcedatasync"

dataawsccssmresourcedatasync.DataAwsccSsmResourceDataSync_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmresourcedatasync"

dataawsccssmresourcedatasync.DataAwsccSsmResourceDataSync_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmresourcedatasync"

dataawsccssmresourcedatasync.DataAwsccSsmResourceDataSync_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmresourcedatasync"

dataawsccssmresourcedatasync.DataAwsccSsmResourceDataSync_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSsmResourceDataSync resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSsmResourceDataSync to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSsmResourceDataSync that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_resource_data_sync#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmResourceDataSync to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference">DataAwsccSsmResourceDataSyncS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncFormat">SyncFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncName">SyncName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncSource">SyncSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference">DataAwsccSsmResourceDataSyncSyncSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncType">SyncType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketPrefix"></a>

```go
func BucketPrefix() *string
```

- *Type:* *string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketRegion"></a>

```go
func BucketRegion() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.s3Destination"></a>

```go
func S3Destination() DataAwsccSsmResourceDataSyncS3DestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference">DataAwsccSsmResourceDataSyncS3DestinationOutputReference</a>

---

##### `SyncFormat`<sup>Required</sup> <a name="SyncFormat" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncFormat"></a>

```go
func SyncFormat() *string
```

- *Type:* *string

---

##### `SyncName`<sup>Required</sup> <a name="SyncName" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncName"></a>

```go
func SyncName() *string
```

- *Type:* *string

---

##### `SyncSource`<sup>Required</sup> <a name="SyncSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncSource"></a>

```go
func SyncSource() DataAwsccSsmResourceDataSyncSyncSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference">DataAwsccSsmResourceDataSyncSyncSourceOutputReference</a>

---

##### `SyncType`<sup>Required</sup> <a name="SyncType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncType"></a>

```go
func SyncType() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmResourceDataSyncConfig <a name="DataAwsccSsmResourceDataSyncConfig" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmresourcedatasync"

&dataawsccssmresourcedatasync.DataAwsccSsmResourceDataSyncConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_resource_data_sync#id DataAwsccSsmResourceDataSync#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmResourceDataSyncS3Destination <a name="DataAwsccSsmResourceDataSyncS3Destination" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3Destination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmresourcedatasync"

&dataawsccssmresourcedatasync.DataAwsccSsmResourceDataSyncS3Destination {

}
```


### DataAwsccSsmResourceDataSyncSyncSource <a name="DataAwsccSsmResourceDataSyncSyncSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmresourcedatasync"

&dataawsccssmresourcedatasync.DataAwsccSsmResourceDataSyncSyncSource {

}
```


### DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource <a name="DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmresourcedatasync"

&dataawsccssmresourcedatasync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmResourceDataSyncS3DestinationOutputReference <a name="DataAwsccSsmResourceDataSyncS3DestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmresourcedatasync"

dataawsccssmresourcedatasync.NewDataAwsccSsmResourceDataSyncS3DestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSsmResourceDataSyncS3DestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion">BucketRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.syncFormat">SyncFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3Destination">DataAwsccSsmResourceDataSyncS3Destination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix"></a>

```go
func BucketPrefix() *string
```

- *Type:* *string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion"></a>

```go
func BucketRegion() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `SyncFormat`<sup>Required</sup> <a name="SyncFormat" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.syncFormat"></a>

```go
func SyncFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSsmResourceDataSyncS3Destination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3Destination">DataAwsccSsmResourceDataSyncS3Destination</a>

---


### DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference <a name="DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmresourcedatasync"

dataawsccssmresourcedatasync.NewDataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits">OrganizationalUnits</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType">OrganizationSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource">DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits"></a>

```go
func OrganizationalUnits() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationSourceType`<sup>Required</sup> <a name="OrganizationSourceType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType"></a>

```go
func OrganizationSourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource">DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

---


### DataAwsccSsmResourceDataSyncSyncSourceOutputReference <a name="DataAwsccSsmResourceDataSyncSyncSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmresourcedatasync"

dataawsccssmresourcedatasync.NewDataAwsccSsmResourceDataSyncSyncSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSsmResourceDataSyncSyncSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource">AwsOrganizationsSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions">IncludeFutureRegions</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions">SourceRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSource">DataAwsccSsmResourceDataSyncSyncSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsOrganizationsSource`<sup>Required</sup> <a name="AwsOrganizationsSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource"></a>

```go
func AwsOrganizationsSource() DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a>

---

##### `IncludeFutureRegions`<sup>Required</sup> <a name="IncludeFutureRegions" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions"></a>

```go
func IncludeFutureRegions() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SourceRegions`<sup>Required</sup> <a name="SourceRegions" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions"></a>

```go
func SourceRegions() *[]*string
```

- *Type:* *[]*string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSsmResourceDataSyncSyncSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSource">DataAwsccSsmResourceDataSyncSyncSource</a>

---



