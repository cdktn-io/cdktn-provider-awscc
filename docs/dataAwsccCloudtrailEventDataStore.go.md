# `dataAwsccCloudtrailEventDataStore` Submodule <a name="`dataAwsccCloudtrailEventDataStore` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudtrailEventDataStore <a name="DataAwsccCloudtrailEventDataStore" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudtrail_event_data_store awscc_cloudtrail_event_data_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.NewDataAwsccCloudtrailEventDataStore(scope Construct, id *string, config DataAwsccCloudtrailEventDataStoreConfig) DataAwsccCloudtrailEventDataStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig">DataAwsccCloudtrailEventDataStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig">DataAwsccCloudtrailEventDataStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudtrailEventDataStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.DataAwsccCloudtrailEventDataStore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.DataAwsccCloudtrailEventDataStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.DataAwsccCloudtrailEventDataStore_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.DataAwsccCloudtrailEventDataStore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCloudtrailEventDataStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCloudtrailEventDataStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCloudtrailEventDataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudtrail_event_data_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudtrailEventDataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.advancedEventSelectors">AdvancedEventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.billingMode">BillingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.contextKeySelectors">ContextKeySelectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList">DataAwsccCloudtrailEventDataStoreContextKeySelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.eventDataStoreArn">EventDataStoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.federationEnabled">FederationEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.federationRoleArn">FederationRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.ingestionEnabled">IngestionEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.insightsDestination">InsightsDestination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.insightSelectors">InsightSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList">DataAwsccCloudtrailEventDataStoreInsightSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.maxEventSize">MaxEventSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.multiRegionEnabled">MultiRegionEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.organizationEnabled">OrganizationEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.retentionPeriod">RetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList">DataAwsccCloudtrailEventDataStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terminationProtectionEnabled">TerminationProtectionEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AdvancedEventSelectors`<sup>Required</sup> <a name="AdvancedEventSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.advancedEventSelectors"></a>

```go
func AdvancedEventSelectors() DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList</a>

---

##### `BillingMode`<sup>Required</sup> <a name="BillingMode" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.billingMode"></a>

```go
func BillingMode() *string
```

- *Type:* *string

---

##### `ContextKeySelectors`<sup>Required</sup> <a name="ContextKeySelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.contextKeySelectors"></a>

```go
func ContextKeySelectors() DataAwsccCloudtrailEventDataStoreContextKeySelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList">DataAwsccCloudtrailEventDataStoreContextKeySelectorsList</a>

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `EventDataStoreArn`<sup>Required</sup> <a name="EventDataStoreArn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.eventDataStoreArn"></a>

```go
func EventDataStoreArn() *string
```

- *Type:* *string

---

##### `FederationEnabled`<sup>Required</sup> <a name="FederationEnabled" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.federationEnabled"></a>

```go
func FederationEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FederationRoleArn`<sup>Required</sup> <a name="FederationRoleArn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.federationRoleArn"></a>

```go
func FederationRoleArn() *string
```

- *Type:* *string

---

##### `IngestionEnabled`<sup>Required</sup> <a name="IngestionEnabled" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.ingestionEnabled"></a>

```go
func IngestionEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InsightsDestination`<sup>Required</sup> <a name="InsightsDestination" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.insightsDestination"></a>

```go
func InsightsDestination() *string
```

- *Type:* *string

---

##### `InsightSelectors`<sup>Required</sup> <a name="InsightSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.insightSelectors"></a>

```go
func InsightSelectors() DataAwsccCloudtrailEventDataStoreInsightSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList">DataAwsccCloudtrailEventDataStoreInsightSelectorsList</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `MaxEventSize`<sup>Required</sup> <a name="MaxEventSize" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.maxEventSize"></a>

```go
func MaxEventSize() *string
```

- *Type:* *string

---

##### `MultiRegionEnabled`<sup>Required</sup> <a name="MultiRegionEnabled" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.multiRegionEnabled"></a>

```go
func MultiRegionEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrganizationEnabled`<sup>Required</sup> <a name="OrganizationEnabled" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.organizationEnabled"></a>

```go
func OrganizationEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.retentionPeriod"></a>

```go
func RetentionPeriod() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.tags"></a>

```go
func Tags() DataAwsccCloudtrailEventDataStoreTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList">DataAwsccCloudtrailEventDataStoreTagsList</a>

---

##### `TerminationProtectionEnabled`<sup>Required</sup> <a name="TerminationProtectionEnabled" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terminationProtectionEnabled"></a>

```go
func TerminationProtectionEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.updatedTimestamp"></a>

```go
func UpdatedTimestamp() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors <a name="DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

&dataawscccloudtraileventdatastore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors {

}
```


### DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors <a name="DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

&dataawscccloudtraileventdatastore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors {

}
```


### DataAwsccCloudtrailEventDataStoreConfig <a name="DataAwsccCloudtrailEventDataStoreConfig" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

&dataawscccloudtraileventdatastore.DataAwsccCloudtrailEventDataStoreConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudtrail_event_data_store#id DataAwsccCloudtrailEventDataStore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudtrailEventDataStoreContextKeySelectors <a name="DataAwsccCloudtrailEventDataStoreContextKeySelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

&dataawscccloudtraileventdatastore.DataAwsccCloudtrailEventDataStoreContextKeySelectors {

}
```


### DataAwsccCloudtrailEventDataStoreInsightSelectors <a name="DataAwsccCloudtrailEventDataStoreInsightSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

&dataawscccloudtraileventdatastore.DataAwsccCloudtrailEventDataStoreInsightSelectors {

}
```


### DataAwsccCloudtrailEventDataStoreTags <a name="DataAwsccCloudtrailEventDataStoreTags" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

&dataawscccloudtraileventdatastore.DataAwsccCloudtrailEventDataStoreTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList <a name="DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.NewDataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference <a name="DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.NewDataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith">EndsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo">EqualTo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith">NotEndsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals">NotEquals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith">NotStartsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith">StartsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndsWith`<sup>Required</sup> <a name="EndsWith" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith"></a>

```go
func EndsWith() *[]*string
```

- *Type:* *[]*string

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo"></a>

```go
func EqualTo() *[]*string
```

- *Type:* *[]*string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `NotEndsWith`<sup>Required</sup> <a name="NotEndsWith" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith"></a>

```go
func NotEndsWith() *[]*string
```

- *Type:* *[]*string

---

##### `NotEquals`<sup>Required</sup> <a name="NotEquals" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals"></a>

```go
func NotEquals() *[]*string
```

- *Type:* *[]*string

---

##### `NotStartsWith`<sup>Required</sup> <a name="NotStartsWith" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith"></a>

```go
func NotStartsWith() *[]*string
```

- *Type:* *[]*string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith"></a>

```go
func StartsWith() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>

---


### DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList <a name="DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.NewDataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference <a name="DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.NewDataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fieldSelectors">FieldSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldSelectors`<sup>Required</sup> <a name="FieldSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fieldSelectors"></a>

```go
func FieldSelectors() DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors</a>

---


### DataAwsccCloudtrailEventDataStoreContextKeySelectorsList <a name="DataAwsccCloudtrailEventDataStoreContextKeySelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.NewDataAwsccCloudtrailEventDataStoreContextKeySelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudtrailEventDataStoreContextKeySelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference <a name="DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.NewDataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.equalTo">EqualTo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectors">DataAwsccCloudtrailEventDataStoreContextKeySelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.equalTo"></a>

```go
func EqualTo() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudtrailEventDataStoreContextKeySelectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectors">DataAwsccCloudtrailEventDataStoreContextKeySelectors</a>

---


### DataAwsccCloudtrailEventDataStoreInsightSelectorsList <a name="DataAwsccCloudtrailEventDataStoreInsightSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.NewDataAwsccCloudtrailEventDataStoreInsightSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudtrailEventDataStoreInsightSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference <a name="DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.NewDataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.insightType">InsightType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectors">DataAwsccCloudtrailEventDataStoreInsightSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InsightType`<sup>Required</sup> <a name="InsightType" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.insightType"></a>

```go
func InsightType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudtrailEventDataStoreInsightSelectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectors">DataAwsccCloudtrailEventDataStoreInsightSelectors</a>

---


### DataAwsccCloudtrailEventDataStoreTagsList <a name="DataAwsccCloudtrailEventDataStoreTagsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.NewDataAwsccCloudtrailEventDataStoreTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudtrailEventDataStoreTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudtrailEventDataStoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudtrailEventDataStoreTagsOutputReference <a name="DataAwsccCloudtrailEventDataStoreTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtraileventdatastore"

dataawscccloudtraileventdatastore.NewDataAwsccCloudtrailEventDataStoreTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudtrailEventDataStoreTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTags">DataAwsccCloudtrailEventDataStoreTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudtrailEventDataStoreTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTags">DataAwsccCloudtrailEventDataStoreTags</a>

---



