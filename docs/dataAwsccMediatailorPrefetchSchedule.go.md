# `dataAwsccMediatailorPrefetchSchedule` Submodule <a name="`dataAwsccMediatailorPrefetchSchedule` Submodule" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediatailorPrefetchSchedule <a name="DataAwsccMediatailorPrefetchSchedule" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediatailor_prefetch_schedule awscc_mediatailor_prefetch_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchSchedule(scope Construct, id *string, config DataAwsccMediatailorPrefetchScheduleConfig) DataAwsccMediatailorPrefetchSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig">DataAwsccMediatailorPrefetchScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig">DataAwsccMediatailorPrefetchScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediatailorPrefetchSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchSchedule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccMediatailorPrefetchSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccMediatailorPrefetchSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccMediatailorPrefetchSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediatailor_prefetch_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediatailorPrefetchSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.consumption">Consumption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference">DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.playbackConfigurationName">PlaybackConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.recurringPrefetchConfiguration">RecurringPrefetchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.retrieval">Retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.scheduleType">ScheduleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList">DataAwsccMediatailorPrefetchScheduleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Consumption`<sup>Required</sup> <a name="Consumption" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.consumption"></a>

```go
func Consumption() DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference">DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PlaybackConfigurationName`<sup>Required</sup> <a name="PlaybackConfigurationName" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.playbackConfigurationName"></a>

```go
func PlaybackConfigurationName() *string
```

- *Type:* *string

---

##### `RecurringPrefetchConfiguration`<sup>Required</sup> <a name="RecurringPrefetchConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.recurringPrefetchConfiguration"></a>

```go
func RecurringPrefetchConfiguration() DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference</a>

---

##### `Retrieval`<sup>Required</sup> <a name="Retrieval" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.retrieval"></a>

```go
func Retrieval() DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference</a>

---

##### `ScheduleType`<sup>Required</sup> <a name="ScheduleType" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.scheduleType"></a>

```go
func ScheduleType() *string
```

- *Type:* *string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.tags"></a>

```go
func Tags() DataAwsccMediatailorPrefetchScheduleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList">DataAwsccMediatailorPrefetchScheduleTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediatailorPrefetchScheduleConfig <a name="DataAwsccMediatailorPrefetchScheduleConfig" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

&dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchScheduleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediatailor_prefetch_schedule#id DataAwsccMediatailorPrefetchSchedule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediatailorPrefetchScheduleConsumption <a name="DataAwsccMediatailorPrefetchScheduleConsumption" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

&dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchScheduleConsumption {

}
```


### DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria <a name="DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

&dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria {

}
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

&dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration {

}
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

&dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption {

}
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

&dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria {

}
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

&dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval {

}
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

&dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow {

}
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

&dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration {

}
```


### DataAwsccMediatailorPrefetchScheduleRetrieval <a name="DataAwsccMediatailorPrefetchScheduleRetrieval" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

&dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchScheduleRetrieval {

}
```


### DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow <a name="DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

&dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow {

}
```


### DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration <a name="DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

&dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration {

}
```


### DataAwsccMediatailorPrefetchScheduleTags <a name="DataAwsccMediatailorPrefetchScheduleTags" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

&dataawsccmediatailorprefetchschedule.DataAwsccMediatailorPrefetchScheduleTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList <a name="DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get"></a>

```go
func Get(index *f64) DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference <a name="DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable">DynamicVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicVariable`<sup>Required</sup> <a name="DynamicVariable" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable"></a>

```go
func DynamicVariable() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>

---


### DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference <a name="DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleConsumptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteria">AvailMatchingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList">DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption">DataAwsccMediatailorPrefetchScheduleConsumption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailMatchingCriteria`<sup>Required</sup> <a name="AvailMatchingCriteria" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteria"></a>

```go
func AvailMatchingCriteria() DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList">DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediatailorPrefetchScheduleConsumption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption">DataAwsccMediatailorPrefetchScheduleConsumption</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumption">RecurringConsumption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrieval">RecurringRetrieval</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `RecurringConsumption`<sup>Required</sup> <a name="RecurringConsumption" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumption"></a>

```go
func RecurringConsumption() DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference</a>

---

##### `RecurringRetrieval`<sup>Required</sup> <a name="RecurringRetrieval" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrieval"></a>

```go
func RecurringRetrieval() DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get"></a>

```go
func Get(index *f64) DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable">DynamicVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicVariable`<sup>Required</sup> <a name="DynamicVariable" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable"></a>

```go
func DynamicVariable() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteria">AvailMatchingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSeconds">RetrievedAdExpirationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailMatchingCriteria`<sup>Required</sup> <a name="AvailMatchingCriteria" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteria"></a>

```go
func AvailMatchingCriteria() DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList</a>

---

##### `RetrievedAdExpirationSeconds`<sup>Required</sup> <a name="RetrievedAdExpirationSeconds" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSeconds"></a>

```go
func RetrievedAdExpirationSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSeconds">DelayAfterAvailEndSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariables">DynamicVariables</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindow">TrafficShapingRetrievalWindow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfiguration">TrafficShapingTpsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingType">TrafficShapingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelayAfterAvailEndSeconds`<sup>Required</sup> <a name="DelayAfterAvailEndSeconds" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSeconds"></a>

```go
func DelayAfterAvailEndSeconds() *f64
```

- *Type:* *f64

---

##### `DynamicVariables`<sup>Required</sup> <a name="DynamicVariables" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariables"></a>

```go
func DynamicVariables() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `TrafficShapingRetrievalWindow`<sup>Required</sup> <a name="TrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindow"></a>

```go
func TrafficShapingRetrievalWindow() DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference</a>

---

##### `TrafficShapingTpsConfiguration`<sup>Required</sup> <a name="TrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfiguration"></a>

```go
func TrafficShapingTpsConfiguration() DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference</a>

---

##### `TrafficShapingType`<sup>Required</sup> <a name="TrafficShapingType" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingType"></a>

```go
func TrafficShapingType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds">RetrievalWindowDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetrievalWindowDurationSeconds`<sup>Required</sup> <a name="RetrievalWindowDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds"></a>

```go
func RetrievalWindowDurationSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers">PeakConcurrentUsers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps">PeakTps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeakConcurrentUsers`<sup>Required</sup> <a name="PeakConcurrentUsers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers"></a>

```go
func PeakConcurrentUsers() *f64
```

- *Type:* *f64

---

##### `PeakTps`<sup>Required</sup> <a name="PeakTps" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps"></a>

```go
func PeakTps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a>

---


### DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleRetrievalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariables">DynamicVariables</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindow">TrafficShapingRetrievalWindow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfiguration">TrafficShapingTpsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingType">TrafficShapingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval">DataAwsccMediatailorPrefetchScheduleRetrieval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicVariables`<sup>Required</sup> <a name="DynamicVariables" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariables"></a>

```go
func DynamicVariables() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TrafficShapingRetrievalWindow`<sup>Required</sup> <a name="TrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindow"></a>

```go
func TrafficShapingRetrievalWindow() DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference</a>

---

##### `TrafficShapingTpsConfiguration`<sup>Required</sup> <a name="TrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfiguration"></a>

```go
func TrafficShapingTpsConfiguration() DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference</a>

---

##### `TrafficShapingType`<sup>Required</sup> <a name="TrafficShapingType" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingType"></a>

```go
func TrafficShapingType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediatailorPrefetchScheduleRetrieval
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval">DataAwsccMediatailorPrefetchScheduleRetrieval</a>

---


### DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds">RetrievalWindowDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetrievalWindowDurationSeconds`<sup>Required</sup> <a name="RetrievalWindowDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds"></a>

```go
func RetrievalWindowDurationSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a>

---


### DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers">PeakConcurrentUsers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps">PeakTps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeakConcurrentUsers`<sup>Required</sup> <a name="PeakConcurrentUsers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers"></a>

```go
func PeakConcurrentUsers() *f64
```

- *Type:* *f64

---

##### `PeakTps`<sup>Required</sup> <a name="PeakTps" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps"></a>

```go
func PeakTps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a>

---


### DataAwsccMediatailorPrefetchScheduleTagsList <a name="DataAwsccMediatailorPrefetchScheduleTagsList" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediatailorPrefetchScheduleTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.get"></a>

```go
func Get(index *f64) DataAwsccMediatailorPrefetchScheduleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediatailorPrefetchScheduleTagsOutputReference <a name="DataAwsccMediatailorPrefetchScheduleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediatailorprefetchschedule"

dataawsccmediatailorprefetchschedule.NewDataAwsccMediatailorPrefetchScheduleTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediatailorPrefetchScheduleTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags">DataAwsccMediatailorPrefetchScheduleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediatailorPrefetchScheduleTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags">DataAwsccMediatailorPrefetchScheduleTags</a>

---



