# `dataAwsccStoragegatewayVolume` Submodule <a name="`dataAwsccStoragegatewayVolume` Submodule" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccStoragegatewayVolume <a name="DataAwsccStoragegatewayVolume" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/storagegateway_volume awscc_storagegateway_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccstoragegatewayvolume"

dataawsccstoragegatewayvolume.NewDataAwsccStoragegatewayVolume(scope Construct, id *string, config DataAwsccStoragegatewayVolumeConfig) DataAwsccStoragegatewayVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig">DataAwsccStoragegatewayVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig">DataAwsccStoragegatewayVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccStoragegatewayVolume resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccstoragegatewayvolume"

dataawsccstoragegatewayvolume.DataAwsccStoragegatewayVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccstoragegatewayvolume"

dataawsccstoragegatewayvolume.DataAwsccStoragegatewayVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccstoragegatewayvolume"

dataawsccstoragegatewayvolume.DataAwsccStoragegatewayVolume_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccstoragegatewayvolume"

dataawsccstoragegatewayvolume.DataAwsccStoragegatewayVolume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccStoragegatewayVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccStoragegatewayVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccStoragegatewayVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/storagegateway_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccStoragegatewayVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsEncrypted">KmsEncrypted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.sourceVolumeArn">SourceVolumeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList">DataAwsccStoragegatewayVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetArn">TargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetName">TargetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeArn">VolumeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeAttachmentStatus">VolumeAttachmentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeSizeInBytes">VolumeSizeInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeStatus">VolumeStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeUsedInBytes">VolumeUsedInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.gatewayArn"></a>

```go
func GatewayArn() *string
```

- *Type:* *string

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsEncrypted"></a>

```go
func KmsEncrypted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `SourceVolumeArn`<sup>Required</sup> <a name="SourceVolumeArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.sourceVolumeArn"></a>

```go
func SourceVolumeArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tags"></a>

```go
func Tags() DataAwsccStoragegatewayVolumeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList">DataAwsccStoragegatewayVolumeTagsList</a>

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetArn"></a>

```go
func TargetArn() *string
```

- *Type:* *string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetName"></a>

```go
func TargetName() *string
```

- *Type:* *string

---

##### `VolumeArn`<sup>Required</sup> <a name="VolumeArn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeArn"></a>

```go
func VolumeArn() *string
```

- *Type:* *string

---

##### `VolumeAttachmentStatus`<sup>Required</sup> <a name="VolumeAttachmentStatus" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeAttachmentStatus"></a>

```go
func VolumeAttachmentStatus() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `VolumeSizeInBytes`<sup>Required</sup> <a name="VolumeSizeInBytes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeSizeInBytes"></a>

```go
func VolumeSizeInBytes() *f64
```

- *Type:* *f64

---

##### `VolumeStatus`<sup>Required</sup> <a name="VolumeStatus" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeStatus"></a>

```go
func VolumeStatus() *string
```

- *Type:* *string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `VolumeUsedInBytes`<sup>Required</sup> <a name="VolumeUsedInBytes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeUsedInBytes"></a>

```go
func VolumeUsedInBytes() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccStoragegatewayVolumeConfig <a name="DataAwsccStoragegatewayVolumeConfig" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccstoragegatewayvolume"

&dataawsccstoragegatewayvolume.DataAwsccStoragegatewayVolumeConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/storagegateway_volume#id DataAwsccStoragegatewayVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccStoragegatewayVolumeTags <a name="DataAwsccStoragegatewayVolumeTags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccstoragegatewayvolume"

&dataawsccstoragegatewayvolume.DataAwsccStoragegatewayVolumeTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccStoragegatewayVolumeTagsList <a name="DataAwsccStoragegatewayVolumeTagsList" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccstoragegatewayvolume"

dataawsccstoragegatewayvolume.NewDataAwsccStoragegatewayVolumeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccStoragegatewayVolumeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.get"></a>

```go
func Get(index *f64) DataAwsccStoragegatewayVolumeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccStoragegatewayVolumeTagsOutputReference <a name="DataAwsccStoragegatewayVolumeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccstoragegatewayvolume"

dataawsccstoragegatewayvolume.NewDataAwsccStoragegatewayVolumeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccStoragegatewayVolumeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags">DataAwsccStoragegatewayVolumeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccStoragegatewayVolumeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags">DataAwsccStoragegatewayVolumeTags</a>

---



