# `dataAwsccIotanalyticsDatastore` Submodule <a name="`dataAwsccIotanalyticsDatastore` Submodule" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotanalyticsDatastore <a name="DataAwsccIotanalyticsDatastore" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotanalytics_datastore awscc_iotanalytics_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastore(scope Construct, id *string, config DataAwsccIotanalyticsDatastoreConfig) DataAwsccIotanalyticsDatastore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig">DataAwsccIotanalyticsDatastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig">DataAwsccIotanalyticsDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotanalyticsDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastore_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIotanalyticsDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIotanalyticsDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIotanalyticsDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotanalytics_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotanalyticsDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastoreId">DatastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastoreName">DatastoreName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastorePartitions">DatastorePartitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference">DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastoreStorage">DatastoreStorage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.fileFormatConfiguration">FileFormatConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference">DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.retentionPeriod">RetentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference">DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList">DataAwsccIotanalyticsDatastoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DatastoreId`<sup>Required</sup> <a name="DatastoreId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastoreId"></a>

```go
func DatastoreId() *string
```

- *Type:* *string

---

##### `DatastoreName`<sup>Required</sup> <a name="DatastoreName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastoreName"></a>

```go
func DatastoreName() *string
```

- *Type:* *string

---

##### `DatastorePartitions`<sup>Required</sup> <a name="DatastorePartitions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastorePartitions"></a>

```go
func DatastorePartitions() DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference">DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference</a>

---

##### `DatastoreStorage`<sup>Required</sup> <a name="DatastoreStorage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastoreStorage"></a>

```go
func DatastoreStorage() DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference</a>

---

##### `FileFormatConfiguration`<sup>Required</sup> <a name="FileFormatConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.fileFormatConfiguration"></a>

```go
func FileFormatConfiguration() DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference">DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference</a>

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.retentionPeriod"></a>

```go
func RetentionPeriod() DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference">DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.tags"></a>

```go
func Tags() DataAwsccIotanalyticsDatastoreTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList">DataAwsccIotanalyticsDatastoreTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotanalyticsDatastoreConfig <a name="DataAwsccIotanalyticsDatastoreConfig" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotanalytics_datastore#id DataAwsccIotanalyticsDatastore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotanalyticsDatastoreDatastorePartitions <a name="DataAwsccIotanalyticsDatastoreDatastorePartitions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreDatastorePartitions {

}
```


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions {

}
```


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition {

}
```


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition {

}
```


### DataAwsccIotanalyticsDatastoreDatastoreStorage <a name="DataAwsccIotanalyticsDatastoreDatastoreStorage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreDatastoreStorage {

}
```


### DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3 <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3 {

}
```


### DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage {

}
```


### DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage {

}
```


### DataAwsccIotanalyticsDatastoreFileFormatConfiguration <a name="DataAwsccIotanalyticsDatastoreFileFormatConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreFileFormatConfiguration {

}
```


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration {

}
```


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition {

}
```


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns {

}
```


### DataAwsccIotanalyticsDatastoreRetentionPeriod <a name="DataAwsccIotanalyticsDatastoreRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriod.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreRetentionPeriod {

}
```


### DataAwsccIotanalyticsDatastoreTags <a name="DataAwsccIotanalyticsDatastoreTags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

&dataawscciotanalyticsdatastore.DataAwsccIotanalyticsDatastoreTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.partitions">Partitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitions">DataAwsccIotanalyticsDatastoreDatastorePartitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Partitions`<sup>Required</sup> <a name="Partitions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.partitions"></a>

```go
func Partitions() DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreDatastorePartitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitions">DataAwsccIotanalyticsDatastoreDatastorePartitions</a>

---


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.get"></a>

```go
func Get(index *f64) DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.partition">Partition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.timestampPartition">TimestampPartition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.partition"></a>

```go
func Partition() DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference</a>

---

##### `TimestampPartition`<sup>Required</sup> <a name="TimestampPartition" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.timestampPartition"></a>

```go
func TimestampPartition() DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions</a>

---


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a>

---


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.timestampFormat"></a>

```go
func TimestampFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a>

---


### DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3">DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3">DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a>

---


### DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a>

---


### DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.customerManagedS3Storage">CustomerManagedS3Storage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedS3Storage`<sup>Required</sup> <a name="CustomerManagedS3Storage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.customerManagedS3Storage"></a>

```go
func CustomerManagedS3Storage() DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a>

---


### DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.customerManagedS3">CustomerManagedS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.iotSiteWiseMultiLayerStorage">IotSiteWiseMultiLayerStorage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.serviceManagedS3">ServiceManagedS3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorage">DataAwsccIotanalyticsDatastoreDatastoreStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedS3`<sup>Required</sup> <a name="CustomerManagedS3" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.customerManagedS3"></a>

```go
func CustomerManagedS3() DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference</a>

---

##### `IotSiteWiseMultiLayerStorage`<sup>Required</sup> <a name="IotSiteWiseMultiLayerStorage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.iotSiteWiseMultiLayerStorage"></a>

```go
func IotSiteWiseMultiLayerStorage() DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference</a>

---

##### `ServiceManagedS3`<sup>Required</sup> <a name="ServiceManagedS3" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.serviceManagedS3"></a>

```go
func ServiceManagedS3() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreDatastoreStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorage">DataAwsccIotanalyticsDatastoreDatastoreStorage</a>

---


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.jsonConfiguration">JsonConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.parquetConfiguration">ParquetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfiguration">DataAwsccIotanalyticsDatastoreFileFormatConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonConfiguration`<sup>Required</sup> <a name="JsonConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.jsonConfiguration"></a>

```go
func JsonConfiguration() *string
```

- *Type:* *string

---

##### `ParquetConfiguration`<sup>Required</sup> <a name="ParquetConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.parquetConfiguration"></a>

```go
func ParquetConfiguration() DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreFileFormatConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfiguration">DataAwsccIotanalyticsDatastoreFileFormatConfiguration</a>

---


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.schemaDefinition">SchemaDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaDefinition`<sup>Required</sup> <a name="SchemaDefinition" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.schemaDefinition"></a>

```go
func SchemaDefinition() DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a>

---


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.get"></a>

```go
func Get(index *f64) DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>

---


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.columns"></a>

```go
func Columns() DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a>

---


### DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference <a name="DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.numberOfDays">NumberOfDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.unlimited">Unlimited</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriod">DataAwsccIotanalyticsDatastoreRetentionPeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberOfDays`<sup>Required</sup> <a name="NumberOfDays" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.numberOfDays"></a>

```go
func NumberOfDays() *f64
```

- *Type:* *f64

---

##### `Unlimited`<sup>Required</sup> <a name="Unlimited" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.unlimited"></a>

```go
func Unlimited() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreRetentionPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriod">DataAwsccIotanalyticsDatastoreRetentionPeriod</a>

---


### DataAwsccIotanalyticsDatastoreTagsList <a name="DataAwsccIotanalyticsDatastoreTagsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotanalyticsDatastoreTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIotanalyticsDatastoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotanalyticsDatastoreTagsOutputReference <a name="DataAwsccIotanalyticsDatastoreTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotanalyticsdatastore"

dataawscciotanalyticsdatastore.NewDataAwsccIotanalyticsDatastoreTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotanalyticsDatastoreTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTags">DataAwsccIotanalyticsDatastoreTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotanalyticsDatastoreTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTags">DataAwsccIotanalyticsDatastoreTags</a>

---



