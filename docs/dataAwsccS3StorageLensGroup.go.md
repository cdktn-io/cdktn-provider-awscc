# `dataAwsccS3StorageLensGroup` Submodule <a name="`dataAwsccS3StorageLensGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3StorageLensGroup <a name="DataAwsccS3StorageLensGroup" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/s3_storage_lens_group awscc_s3_storage_lens_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroup(scope Construct, id *string, config DataAwsccS3StorageLensGroupConfig) DataAwsccS3StorageLensGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig">DataAwsccS3StorageLensGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig">DataAwsccS3StorageLensGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3StorageLensGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccS3StorageLensGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccS3StorageLensGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccS3StorageLensGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/s3_storage_lens_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3StorageLensGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference">DataAwsccS3StorageLensGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.storageLensGroupArn">StorageLensGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList">DataAwsccS3StorageLensGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.filter"></a>

```go
func Filter() DataAwsccS3StorageLensGroupFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference">DataAwsccS3StorageLensGroupFilterOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StorageLensGroupArn`<sup>Required</sup> <a name="StorageLensGroupArn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.storageLensGroupArn"></a>

```go
func StorageLensGroupArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.tags"></a>

```go
func Tags() DataAwsccS3StorageLensGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList">DataAwsccS3StorageLensGroupTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3StorageLensGroupConfig <a name="DataAwsccS3StorageLensGroupConfig" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/s3_storage_lens_group#id DataAwsccS3StorageLensGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3StorageLensGroupFilter <a name="DataAwsccS3StorageLensGroupFilter" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupFilter {

}
```


### DataAwsccS3StorageLensGroupFilterAnd <a name="DataAwsccS3StorageLensGroupFilterAnd" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupFilterAnd {

}
```


### DataAwsccS3StorageLensGroupFilterAndMatchAnyTag <a name="DataAwsccS3StorageLensGroupFilterAndMatchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag {

}
```


### DataAwsccS3StorageLensGroupFilterAndMatchObjectAge <a name="DataAwsccS3StorageLensGroupFilterAndMatchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge {

}
```


### DataAwsccS3StorageLensGroupFilterAndMatchObjectSize <a name="DataAwsccS3StorageLensGroupFilterAndMatchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize {

}
```


### DataAwsccS3StorageLensGroupFilterMatchAnyTag <a name="DataAwsccS3StorageLensGroupFilterMatchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag {

}
```


### DataAwsccS3StorageLensGroupFilterMatchObjectAge <a name="DataAwsccS3StorageLensGroupFilterMatchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge {

}
```


### DataAwsccS3StorageLensGroupFilterMatchObjectSize <a name="DataAwsccS3StorageLensGroupFilterMatchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize {

}
```


### DataAwsccS3StorageLensGroupFilterOr <a name="DataAwsccS3StorageLensGroupFilterOr" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupFilterOr {

}
```


### DataAwsccS3StorageLensGroupFilterOrMatchAnyTag <a name="DataAwsccS3StorageLensGroupFilterOrMatchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag {

}
```


### DataAwsccS3StorageLensGroupFilterOrMatchObjectAge <a name="DataAwsccS3StorageLensGroupFilterOrMatchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge {

}
```


### DataAwsccS3StorageLensGroupFilterOrMatchObjectSize <a name="DataAwsccS3StorageLensGroupFilterOrMatchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize {

}
```


### DataAwsccS3StorageLensGroupTags <a name="DataAwsccS3StorageLensGroupTags" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

&dataawsccs3storagelensgroup.DataAwsccS3StorageLensGroupTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList <a name="DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterAndMatchAnyTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.get"></a>

```go
func Get(index *f64) DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference <a name="DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag">DataAwsccS3StorageLensGroupFilterAndMatchAnyTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensGroupFilterAndMatchAnyTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTag">DataAwsccS3StorageLensGroupFilterAndMatchAnyTag</a>

---


### DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference <a name="DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThan">DaysGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThan">DaysLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge">DataAwsccS3StorageLensGroupFilterAndMatchObjectAge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysGreaterThan`<sup>Required</sup> <a name="DaysGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```go
func DaysGreaterThan() *f64
```

- *Type:* *f64

---

##### `DaysLessThan`<sup>Required</sup> <a name="DaysLessThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThan"></a>

```go
func DaysLessThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensGroupFilterAndMatchObjectAge
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAge">DataAwsccS3StorageLensGroupFilterAndMatchObjectAge</a>

---


### DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference <a name="DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThan">BytesGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThan">BytesLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize">DataAwsccS3StorageLensGroupFilterAndMatchObjectSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BytesGreaterThan`<sup>Required</sup> <a name="BytesGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```go
func BytesGreaterThan() *f64
```

- *Type:* *f64

---

##### `BytesLessThan`<sup>Required</sup> <a name="BytesLessThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```go
func BytesLessThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensGroupFilterAndMatchObjectSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSize">DataAwsccS3StorageLensGroupFilterAndMatchObjectSize</a>

---


### DataAwsccS3StorageLensGroupFilterAndOutputReference <a name="DataAwsccS3StorageLensGroupFilterAndOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterAndOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensGroupFilterAndOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefix">MatchAnyPrefix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnySuffix">MatchAnySuffix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnyTag">MatchAnyTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList">DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchObjectAge">MatchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchObjectSize">MatchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd">DataAwsccS3StorageLensGroupFilterAnd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchAnyPrefix`<sup>Required</sup> <a name="MatchAnyPrefix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefix"></a>

```go
func MatchAnyPrefix() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnySuffix`<sup>Required</sup> <a name="MatchAnySuffix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnySuffix"></a>

```go
func MatchAnySuffix() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnyTag`<sup>Required</sup> <a name="MatchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchAnyTag"></a>

```go
func MatchAnyTag() DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList">DataAwsccS3StorageLensGroupFilterAndMatchAnyTagList</a>

---

##### `MatchObjectAge`<sup>Required</sup> <a name="MatchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchObjectAge"></a>

```go
func MatchObjectAge() DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterAndMatchObjectAgeOutputReference</a>

---

##### `MatchObjectSize`<sup>Required</sup> <a name="MatchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.matchObjectSize"></a>

```go
func MatchObjectSize() DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterAndMatchObjectSizeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensGroupFilterAnd
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAnd">DataAwsccS3StorageLensGroupFilterAnd</a>

---


### DataAwsccS3StorageLensGroupFilterMatchAnyTagList <a name="DataAwsccS3StorageLensGroupFilterMatchAnyTagList" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterMatchAnyTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3StorageLensGroupFilterMatchAnyTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.get"></a>

```go
func Get(index *f64) DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference <a name="DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag">DataAwsccS3StorageLensGroupFilterMatchAnyTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensGroupFilterMatchAnyTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTag">DataAwsccS3StorageLensGroupFilterMatchAnyTag</a>

---


### DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference <a name="DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThan">DaysGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThan">DaysLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge">DataAwsccS3StorageLensGroupFilterMatchObjectAge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysGreaterThan`<sup>Required</sup> <a name="DaysGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```go
func DaysGreaterThan() *f64
```

- *Type:* *f64

---

##### `DaysLessThan`<sup>Required</sup> <a name="DaysLessThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThan"></a>

```go
func DaysLessThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensGroupFilterMatchObjectAge
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAge">DataAwsccS3StorageLensGroupFilterMatchObjectAge</a>

---


### DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference <a name="DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThan">BytesGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThan">BytesLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize">DataAwsccS3StorageLensGroupFilterMatchObjectSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BytesGreaterThan`<sup>Required</sup> <a name="BytesGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```go
func BytesGreaterThan() *f64
```

- *Type:* *f64

---

##### `BytesLessThan`<sup>Required</sup> <a name="BytesLessThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```go
func BytesLessThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensGroupFilterMatchObjectSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSize">DataAwsccS3StorageLensGroupFilterMatchObjectSize</a>

---


### DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList <a name="DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterOrMatchAnyTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.get"></a>

```go
func Get(index *f64) DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference <a name="DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag">DataAwsccS3StorageLensGroupFilterOrMatchAnyTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensGroupFilterOrMatchAnyTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTag">DataAwsccS3StorageLensGroupFilterOrMatchAnyTag</a>

---


### DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference <a name="DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThan">DaysGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThan">DaysLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge">DataAwsccS3StorageLensGroupFilterOrMatchObjectAge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysGreaterThan`<sup>Required</sup> <a name="DaysGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```go
func DaysGreaterThan() *f64
```

- *Type:* *f64

---

##### `DaysLessThan`<sup>Required</sup> <a name="DaysLessThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThan"></a>

```go
func DaysLessThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensGroupFilterOrMatchObjectAge
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAge">DataAwsccS3StorageLensGroupFilterOrMatchObjectAge</a>

---


### DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference <a name="DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThan">BytesGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThan">BytesLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize">DataAwsccS3StorageLensGroupFilterOrMatchObjectSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BytesGreaterThan`<sup>Required</sup> <a name="BytesGreaterThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```go
func BytesGreaterThan() *f64
```

- *Type:* *f64

---

##### `BytesLessThan`<sup>Required</sup> <a name="BytesLessThan" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```go
func BytesLessThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensGroupFilterOrMatchObjectSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSize">DataAwsccS3StorageLensGroupFilterOrMatchObjectSize</a>

---


### DataAwsccS3StorageLensGroupFilterOrOutputReference <a name="DataAwsccS3StorageLensGroupFilterOrOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterOrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensGroupFilterOrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefix">MatchAnyPrefix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnySuffix">MatchAnySuffix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnyTag">MatchAnyTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList">DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchObjectAge">MatchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchObjectSize">MatchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr">DataAwsccS3StorageLensGroupFilterOr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchAnyPrefix`<sup>Required</sup> <a name="MatchAnyPrefix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefix"></a>

```go
func MatchAnyPrefix() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnySuffix`<sup>Required</sup> <a name="MatchAnySuffix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnySuffix"></a>

```go
func MatchAnySuffix() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnyTag`<sup>Required</sup> <a name="MatchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchAnyTag"></a>

```go
func MatchAnyTag() DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList">DataAwsccS3StorageLensGroupFilterOrMatchAnyTagList</a>

---

##### `MatchObjectAge`<sup>Required</sup> <a name="MatchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchObjectAge"></a>

```go
func MatchObjectAge() DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterOrMatchObjectAgeOutputReference</a>

---

##### `MatchObjectSize`<sup>Required</sup> <a name="MatchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.matchObjectSize"></a>

```go
func MatchObjectSize() DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterOrMatchObjectSizeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensGroupFilterOr
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOr">DataAwsccS3StorageLensGroupFilterOr</a>

---


### DataAwsccS3StorageLensGroupFilterOutputReference <a name="DataAwsccS3StorageLensGroupFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensGroupFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.and">And</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference">DataAwsccS3StorageLensGroupFilterAndOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnyPrefix">MatchAnyPrefix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnySuffix">MatchAnySuffix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnyTag">MatchAnyTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList">DataAwsccS3StorageLensGroupFilterMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchObjectAge">MatchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchObjectSize">MatchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.or">Or</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference">DataAwsccS3StorageLensGroupFilterOrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter">DataAwsccS3StorageLensGroupFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.and"></a>

```go
func And() DataAwsccS3StorageLensGroupFilterAndOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterAndOutputReference">DataAwsccS3StorageLensGroupFilterAndOutputReference</a>

---

##### `MatchAnyPrefix`<sup>Required</sup> <a name="MatchAnyPrefix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnyPrefix"></a>

```go
func MatchAnyPrefix() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnySuffix`<sup>Required</sup> <a name="MatchAnySuffix" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnySuffix"></a>

```go
func MatchAnySuffix() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnyTag`<sup>Required</sup> <a name="MatchAnyTag" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchAnyTag"></a>

```go
func MatchAnyTag() DataAwsccS3StorageLensGroupFilterMatchAnyTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchAnyTagList">DataAwsccS3StorageLensGroupFilterMatchAnyTagList</a>

---

##### `MatchObjectAge`<sup>Required</sup> <a name="MatchObjectAge" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchObjectAge"></a>

```go
func MatchObjectAge() DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference">DataAwsccS3StorageLensGroupFilterMatchObjectAgeOutputReference</a>

---

##### `MatchObjectSize`<sup>Required</sup> <a name="MatchObjectSize" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.matchObjectSize"></a>

```go
func MatchObjectSize() DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference">DataAwsccS3StorageLensGroupFilterMatchObjectSizeOutputReference</a>

---

##### `Or`<sup>Required</sup> <a name="Or" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.or"></a>

```go
func Or() DataAwsccS3StorageLensGroupFilterOrOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOrOutputReference">DataAwsccS3StorageLensGroupFilterOrOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensGroupFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupFilter">DataAwsccS3StorageLensGroupFilter</a>

---


### DataAwsccS3StorageLensGroupTagsList <a name="DataAwsccS3StorageLensGroupTagsList" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3StorageLensGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.get"></a>

```go
func Get(index *f64) DataAwsccS3StorageLensGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3StorageLensGroupTagsOutputReference <a name="DataAwsccS3StorageLensGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelensgroup"

dataawsccs3storagelensgroup.NewDataAwsccS3StorageLensGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3StorageLensGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags">DataAwsccS3StorageLensGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLensGroup.DataAwsccS3StorageLensGroupTags">DataAwsccS3StorageLensGroupTags</a>

---



