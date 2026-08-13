# `dataAwsccMedialiveSignalMap` Submodule <a name="`dataAwsccMedialiveSignalMap` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveSignalMap <a name="DataAwsccMedialiveSignalMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/medialive_signal_map awscc_medialive_signal_map}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMap(scope Construct, id *string, config DataAwsccMedialiveSignalMapConfig) DataAwsccMedialiveSignalMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig">DataAwsccMedialiveSignalMapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig">DataAwsccMedialiveSignalMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveSignalMap resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.DataAwsccMedialiveSignalMap_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.DataAwsccMedialiveSignalMap_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.DataAwsccMedialiveSignalMap_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.DataAwsccMedialiveSignalMap_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccMedialiveSignalMap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccMedialiveSignalMap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccMedialiveSignalMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/medialive_signal_map#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveSignalMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIdentifiers">CloudwatchAlarmTemplateGroupIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIds">CloudwatchAlarmTemplateGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.discoveryEntryPointArn">DiscoveryEntryPointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIdentifiers">EventBridgeRuleTemplateGroupIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIds">EventBridgeRuleTemplateGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.failedMediaResourceMap">FailedMediaResourceMap</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap">DataAwsccMedialiveSignalMapFailedMediaResourceMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forceRediscovery">ForceRediscovery</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastDiscoveredAt">LastDiscoveredAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastSuccessfulMonitorDeployment">LastSuccessfulMonitorDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.mediaResourceMap">MediaResourceMap</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap">DataAwsccMedialiveSignalMapMediaResourceMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorChangesPendingDeployment">MonitorChangesPendingDeployment</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorDeployment">MonitorDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.signalMapId">SignalMapId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CloudwatchAlarmTemplateGroupIdentifiers`<sup>Required</sup> <a name="CloudwatchAlarmTemplateGroupIdentifiers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIdentifiers"></a>

```go
func CloudwatchAlarmTemplateGroupIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `CloudwatchAlarmTemplateGroupIds`<sup>Required</sup> <a name="CloudwatchAlarmTemplateGroupIds" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIds"></a>

```go
func CloudwatchAlarmTemplateGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiscoveryEntryPointArn`<sup>Required</sup> <a name="DiscoveryEntryPointArn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.discoveryEntryPointArn"></a>

```go
func DiscoveryEntryPointArn() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `EventBridgeRuleTemplateGroupIdentifiers`<sup>Required</sup> <a name="EventBridgeRuleTemplateGroupIdentifiers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIdentifiers"></a>

```go
func EventBridgeRuleTemplateGroupIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `EventBridgeRuleTemplateGroupIds`<sup>Required</sup> <a name="EventBridgeRuleTemplateGroupIds" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIds"></a>

```go
func EventBridgeRuleTemplateGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `FailedMediaResourceMap`<sup>Required</sup> <a name="FailedMediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.failedMediaResourceMap"></a>

```go
func FailedMediaResourceMap() DataAwsccMedialiveSignalMapFailedMediaResourceMapMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap">DataAwsccMedialiveSignalMapFailedMediaResourceMapMap</a>

---

##### `ForceRediscovery`<sup>Required</sup> <a name="ForceRediscovery" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forceRediscovery"></a>

```go
func ForceRediscovery() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `LastDiscoveredAt`<sup>Required</sup> <a name="LastDiscoveredAt" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastDiscoveredAt"></a>

```go
func LastDiscoveredAt() *string
```

- *Type:* *string

---

##### `LastSuccessfulMonitorDeployment`<sup>Required</sup> <a name="LastSuccessfulMonitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastSuccessfulMonitorDeployment"></a>

```go
func LastSuccessfulMonitorDeployment() DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference</a>

---

##### `MediaResourceMap`<sup>Required</sup> <a name="MediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.mediaResourceMap"></a>

```go
func MediaResourceMap() DataAwsccMedialiveSignalMapMediaResourceMapMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap">DataAwsccMedialiveSignalMapMediaResourceMapMap</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `MonitorChangesPendingDeployment`<sup>Required</sup> <a name="MonitorChangesPendingDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorChangesPendingDeployment"></a>

```go
func MonitorChangesPendingDeployment() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MonitorDeployment`<sup>Required</sup> <a name="MonitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorDeployment"></a>

```go
func MonitorDeployment() DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignalMapId`<sup>Required</sup> <a name="SignalMapId" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.signalMapId"></a>

```go
func SignalMapId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveSignalMapConfig <a name="DataAwsccMedialiveSignalMapConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

&dataawsccmedialivesignalmap.DataAwsccMedialiveSignalMapConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/medialive_signal_map#id DataAwsccMedialiveSignalMap#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMedialiveSignalMapFailedMediaResourceMap <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

&dataawsccmedialivesignalmap.DataAwsccMedialiveSignalMapFailedMediaResourceMap {

}
```


### DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

&dataawsccmedialivesignalmap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations {

}
```


### DataAwsccMedialiveSignalMapFailedMediaResourceMapSources <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapSources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

&dataawsccmedialivesignalmap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources {

}
```


### DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment <a name="DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

&dataawsccmedialivesignalmap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment {

}
```


### DataAwsccMedialiveSignalMapMediaResourceMap <a name="DataAwsccMedialiveSignalMapMediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

&dataawsccmedialivesignalmap.DataAwsccMedialiveSignalMapMediaResourceMap {

}
```


### DataAwsccMedialiveSignalMapMediaResourceMapDestinations <a name="DataAwsccMedialiveSignalMapMediaResourceMapDestinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

&dataawsccmedialivesignalmap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations {

}
```


### DataAwsccMedialiveSignalMapMediaResourceMapSources <a name="DataAwsccMedialiveSignalMapMediaResourceMapSources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

&dataawsccmedialivesignalmap.DataAwsccMedialiveSignalMapMediaResourceMapSources {

}
```


### DataAwsccMedialiveSignalMapMonitorDeployment <a name="DataAwsccMedialiveSignalMapMonitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

&dataawsccmedialivesignalmap.DataAwsccMedialiveSignalMapMonitorDeployment {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations</a>

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapMap <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapFailedMediaResourceMapMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveSignalMapFailedMediaResourceMapMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.get"></a>

```go
func Get(key *string) DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap">DataAwsccMedialiveSignalMapFailedMediaResourceMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.destinations"></a>

```go
func Destinations() DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.sources"></a>

```go
func Sources() DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveSignalMapFailedMediaResourceMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap">DataAwsccMedialiveSignalMapFailedMediaResourceMap</a>

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources">DataAwsccMedialiveSignalMapFailedMediaResourceMapSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveSignalMapFailedMediaResourceMapSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources">DataAwsccMedialiveSignalMapFailedMediaResourceMapSources</a>

---


### DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference <a name="DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.detailsUri">DetailsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DetailsUri`<sup>Required</sup> <a name="DetailsUri" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.detailsUri"></a>

```go
func DetailsUri() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment</a>

---


### DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList <a name="DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapMediaResourceMapDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference <a name="DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations">DataAwsccMedialiveSignalMapMediaResourceMapDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveSignalMapMediaResourceMapDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations">DataAwsccMedialiveSignalMapMediaResourceMapDestinations</a>

---


### DataAwsccMedialiveSignalMapMediaResourceMapMap <a name="DataAwsccMedialiveSignalMapMediaResourceMapMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapMediaResourceMapMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveSignalMapMediaResourceMapMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.get"></a>

```go
func Get(key *string) DataAwsccMedialiveSignalMapMediaResourceMapOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveSignalMapMediaResourceMapOutputReference <a name="DataAwsccMedialiveSignalMapMediaResourceMapOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapMediaResourceMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccMedialiveSignalMapMediaResourceMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapMediaResourceMapSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap">DataAwsccMedialiveSignalMapMediaResourceMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.destinations"></a>

```go
func Destinations() DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.sources"></a>

```go
func Sources() DataAwsccMedialiveSignalMapMediaResourceMapSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapMediaResourceMapSourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveSignalMapMediaResourceMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap">DataAwsccMedialiveSignalMapMediaResourceMap</a>

---


### DataAwsccMedialiveSignalMapMediaResourceMapSourcesList <a name="DataAwsccMedialiveSignalMapMediaResourceMapSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapMediaResourceMapSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveSignalMapMediaResourceMapSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference <a name="DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources">DataAwsccMedialiveSignalMapMediaResourceMapSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveSignalMapMediaResourceMapSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources">DataAwsccMedialiveSignalMapMediaResourceMapSources</a>

---


### DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference <a name="DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmedialivesignalmap"

dataawsccmedialivesignalmap.NewDataAwsccMedialiveSignalMapMonitorDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.detailsUri">DetailsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment">DataAwsccMedialiveSignalMapMonitorDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DetailsUri`<sup>Required</sup> <a name="DetailsUri" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.detailsUri"></a>

```go
func DetailsUri() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveSignalMapMonitorDeployment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment">DataAwsccMedialiveSignalMapMonitorDeployment</a>

---



