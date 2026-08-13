# `dataAwsccS3MultiRegionAccessPoint` Submodule <a name="`dataAwsccS3MultiRegionAccessPoint` Submodule" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3MultiRegionAccessPoint <a name="DataAwsccS3MultiRegionAccessPoint" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3_multi_region_access_point awscc_s3_multi_region_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3multiregionaccesspoint"

dataawsccs3multiregionaccesspoint.NewDataAwsccS3MultiRegionAccessPoint(scope Construct, id *string, config DataAwsccS3MultiRegionAccessPointConfig) DataAwsccS3MultiRegionAccessPoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig">DataAwsccS3MultiRegionAccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig">DataAwsccS3MultiRegionAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3MultiRegionAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3multiregionaccesspoint"

dataawsccs3multiregionaccesspoint.DataAwsccS3MultiRegionAccessPoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3multiregionaccesspoint"

dataawsccs3multiregionaccesspoint.DataAwsccS3MultiRegionAccessPoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3multiregionaccesspoint"

dataawsccs3multiregionaccesspoint.DataAwsccS3MultiRegionAccessPoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3multiregionaccesspoint"

dataawsccs3multiregionaccesspoint.DataAwsccS3MultiRegionAccessPoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccS3MultiRegionAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccS3MultiRegionAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccS3MultiRegionAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3_multi_region_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3MultiRegionAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.publicAccessBlockConfiguration">PublicAccessBlockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference">DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.regions">Regions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList">DataAwsccS3MultiRegionAccessPointRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicAccessBlockConfiguration`<sup>Required</sup> <a name="PublicAccessBlockConfiguration" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.publicAccessBlockConfiguration"></a>

```go
func PublicAccessBlockConfiguration() DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference">DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.regions"></a>

```go
func Regions() DataAwsccS3MultiRegionAccessPointRegionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList">DataAwsccS3MultiRegionAccessPointRegionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3MultiRegionAccessPointConfig <a name="DataAwsccS3MultiRegionAccessPointConfig" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3multiregionaccesspoint"

&dataawsccs3multiregionaccesspoint.DataAwsccS3MultiRegionAccessPointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3_multi_region_access_point#id DataAwsccS3MultiRegionAccessPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfiguration <a name="DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3multiregionaccesspoint"

&dataawsccs3multiregionaccesspoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfiguration {

}
```


### DataAwsccS3MultiRegionAccessPointRegions <a name="DataAwsccS3MultiRegionAccessPointRegions" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3multiregionaccesspoint"

&dataawsccs3multiregionaccesspoint.DataAwsccS3MultiRegionAccessPointRegions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference <a name="DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3multiregionaccesspoint"

dataawsccs3multiregionaccesspoint.NewDataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfiguration">DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```go
func BlockPublicAcls() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```go
func BlockPublicPolicy() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```go
func IgnorePublicAcls() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```go
func RestrictPublicBuckets() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfiguration">DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfiguration</a>

---


### DataAwsccS3MultiRegionAccessPointRegionsList <a name="DataAwsccS3MultiRegionAccessPointRegionsList" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3multiregionaccesspoint"

dataawsccs3multiregionaccesspoint.NewDataAwsccS3MultiRegionAccessPointRegionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3MultiRegionAccessPointRegionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.get"></a>

```go
func Get(index *f64) DataAwsccS3MultiRegionAccessPointRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3MultiRegionAccessPointRegionsOutputReference <a name="DataAwsccS3MultiRegionAccessPointRegionsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3multiregionaccesspoint"

dataawsccs3multiregionaccesspoint.NewDataAwsccS3MultiRegionAccessPointRegionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3MultiRegionAccessPointRegionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.property.bucketAccountId">BucketAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegions">DataAwsccS3MultiRegionAccessPointRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketAccountId`<sup>Required</sup> <a name="BucketAccountId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.property.bucketAccountId"></a>

```go
func BucketAccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3MultiRegionAccessPointRegions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPoint.DataAwsccS3MultiRegionAccessPointRegions">DataAwsccS3MultiRegionAccessPointRegions</a>

---



