# `dataAwsccFrauddetectorEventType` Submodule <a name="`dataAwsccFrauddetectorEventType` Submodule" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFrauddetectorEventType <a name="DataAwsccFrauddetectorEventType" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/frauddetector_event_type awscc_frauddetector_event_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventType(scope Construct, id *string, config DataAwsccFrauddetectorEventTypeConfig) DataAwsccFrauddetectorEventType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig">DataAwsccFrauddetectorEventTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig">DataAwsccFrauddetectorEventTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccFrauddetectorEventType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.DataAwsccFrauddetectorEventType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.DataAwsccFrauddetectorEventType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.DataAwsccFrauddetectorEventType_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.DataAwsccFrauddetectorEventType_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccFrauddetectorEventType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccFrauddetectorEventType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccFrauddetectorEventType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/frauddetector_event_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFrauddetectorEventType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.entityTypes">EntityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList">DataAwsccFrauddetectorEventTypeEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.eventVariables">EventVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList">DataAwsccFrauddetectorEventTypeEventVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.labels">Labels</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList">DataAwsccFrauddetectorEventTypeLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList">DataAwsccFrauddetectorEventTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.entityTypes"></a>

```go
func EntityTypes() DataAwsccFrauddetectorEventTypeEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList">DataAwsccFrauddetectorEventTypeEntityTypesList</a>

---

##### `EventVariables`<sup>Required</sup> <a name="EventVariables" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.eventVariables"></a>

```go
func EventVariables() DataAwsccFrauddetectorEventTypeEventVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList">DataAwsccFrauddetectorEventTypeEventVariablesList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.labels"></a>

```go
func Labels() DataAwsccFrauddetectorEventTypeLabelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList">DataAwsccFrauddetectorEventTypeLabelsList</a>

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.tags"></a>

```go
func Tags() DataAwsccFrauddetectorEventTypeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList">DataAwsccFrauddetectorEventTypeTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFrauddetectorEventTypeConfig <a name="DataAwsccFrauddetectorEventTypeConfig" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

&dataawsccfrauddetectoreventtype.DataAwsccFrauddetectorEventTypeConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/frauddetector_event_type#id DataAwsccFrauddetectorEventType#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFrauddetectorEventTypeEntityTypes <a name="DataAwsccFrauddetectorEventTypeEntityTypes" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

&dataawsccfrauddetectoreventtype.DataAwsccFrauddetectorEventTypeEntityTypes {

}
```


### DataAwsccFrauddetectorEventTypeEntityTypesTags <a name="DataAwsccFrauddetectorEventTypeEntityTypesTags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

&dataawsccfrauddetectoreventtype.DataAwsccFrauddetectorEventTypeEntityTypesTags {

}
```


### DataAwsccFrauddetectorEventTypeEventVariables <a name="DataAwsccFrauddetectorEventTypeEventVariables" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

&dataawsccfrauddetectoreventtype.DataAwsccFrauddetectorEventTypeEventVariables {

}
```


### DataAwsccFrauddetectorEventTypeEventVariablesTags <a name="DataAwsccFrauddetectorEventTypeEventVariablesTags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

&dataawsccfrauddetectoreventtype.DataAwsccFrauddetectorEventTypeEventVariablesTags {

}
```


### DataAwsccFrauddetectorEventTypeLabels <a name="DataAwsccFrauddetectorEventTypeLabels" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

&dataawsccfrauddetectoreventtype.DataAwsccFrauddetectorEventTypeLabels {

}
```


### DataAwsccFrauddetectorEventTypeLabelsTags <a name="DataAwsccFrauddetectorEventTypeLabelsTags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

&dataawsccfrauddetectoreventtype.DataAwsccFrauddetectorEventTypeLabelsTags {

}
```


### DataAwsccFrauddetectorEventTypeTags <a name="DataAwsccFrauddetectorEventTypeTags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

&dataawsccfrauddetectoreventtype.DataAwsccFrauddetectorEventTypeTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFrauddetectorEventTypeEntityTypesList <a name="DataAwsccFrauddetectorEventTypeEntityTypesList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeEntityTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccFrauddetectorEventTypeEntityTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.get"></a>

```go
func Get(index *f64) DataAwsccFrauddetectorEventTypeEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFrauddetectorEventTypeEntityTypesOutputReference <a name="DataAwsccFrauddetectorEventTypeEntityTypesOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeEntityTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccFrauddetectorEventTypeEntityTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.inline">Inline</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList">DataAwsccFrauddetectorEventTypeEntityTypesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypes">DataAwsccFrauddetectorEventTypeEntityTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Inline`<sup>Required</sup> <a name="Inline" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.inline"></a>

```go
func Inline() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.tags"></a>

```go
func Tags() DataAwsccFrauddetectorEventTypeEntityTypesTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList">DataAwsccFrauddetectorEventTypeEntityTypesTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFrauddetectorEventTypeEntityTypes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypes">DataAwsccFrauddetectorEventTypeEntityTypes</a>

---


### DataAwsccFrauddetectorEventTypeEntityTypesTagsList <a name="DataAwsccFrauddetectorEventTypeEntityTypesTagsList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeEntityTypesTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccFrauddetectorEventTypeEntityTypesTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.get"></a>

```go
func Get(index *f64) DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference <a name="DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTags">DataAwsccFrauddetectorEventTypeEntityTypesTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFrauddetectorEventTypeEntityTypesTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEntityTypesTags">DataAwsccFrauddetectorEventTypeEntityTypesTags</a>

---


### DataAwsccFrauddetectorEventTypeEventVariablesList <a name="DataAwsccFrauddetectorEventTypeEventVariablesList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeEventVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccFrauddetectorEventTypeEventVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.get"></a>

```go
func Get(index *f64) DataAwsccFrauddetectorEventTypeEventVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFrauddetectorEventTypeEventVariablesOutputReference <a name="DataAwsccFrauddetectorEventTypeEventVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeEventVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccFrauddetectorEventTypeEventVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.inline">Inline</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList">DataAwsccFrauddetectorEventTypeEventVariablesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.variableType">VariableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariables">DataAwsccFrauddetectorEventTypeEventVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Inline`<sup>Required</sup> <a name="Inline" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.inline"></a>

```go
func Inline() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.tags"></a>

```go
func Tags() DataAwsccFrauddetectorEventTypeEventVariablesTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList">DataAwsccFrauddetectorEventTypeEventVariablesTagsList</a>

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.variableType"></a>

```go
func VariableType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFrauddetectorEventTypeEventVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariables">DataAwsccFrauddetectorEventTypeEventVariables</a>

---


### DataAwsccFrauddetectorEventTypeEventVariablesTagsList <a name="DataAwsccFrauddetectorEventTypeEventVariablesTagsList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeEventVariablesTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccFrauddetectorEventTypeEventVariablesTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.get"></a>

```go
func Get(index *f64) DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference <a name="DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTags">DataAwsccFrauddetectorEventTypeEventVariablesTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFrauddetectorEventTypeEventVariablesTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeEventVariablesTags">DataAwsccFrauddetectorEventTypeEventVariablesTags</a>

---


### DataAwsccFrauddetectorEventTypeLabelsList <a name="DataAwsccFrauddetectorEventTypeLabelsList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccFrauddetectorEventTypeLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.get"></a>

```go
func Get(index *f64) DataAwsccFrauddetectorEventTypeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFrauddetectorEventTypeLabelsOutputReference <a name="DataAwsccFrauddetectorEventTypeLabelsOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccFrauddetectorEventTypeLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.inline">Inline</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList">DataAwsccFrauddetectorEventTypeLabelsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabels">DataAwsccFrauddetectorEventTypeLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Inline`<sup>Required</sup> <a name="Inline" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.inline"></a>

```go
func Inline() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.tags"></a>

```go
func Tags() DataAwsccFrauddetectorEventTypeLabelsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList">DataAwsccFrauddetectorEventTypeLabelsTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFrauddetectorEventTypeLabels
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabels">DataAwsccFrauddetectorEventTypeLabels</a>

---


### DataAwsccFrauddetectorEventTypeLabelsTagsList <a name="DataAwsccFrauddetectorEventTypeLabelsTagsList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeLabelsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccFrauddetectorEventTypeLabelsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.get"></a>

```go
func Get(index *f64) DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference <a name="DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeLabelsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTags">DataAwsccFrauddetectorEventTypeLabelsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFrauddetectorEventTypeLabelsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeLabelsTags">DataAwsccFrauddetectorEventTypeLabelsTags</a>

---


### DataAwsccFrauddetectorEventTypeTagsList <a name="DataAwsccFrauddetectorEventTypeTagsList" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccFrauddetectorEventTypeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.get"></a>

```go
func Get(index *f64) DataAwsccFrauddetectorEventTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccFrauddetectorEventTypeTagsOutputReference <a name="DataAwsccFrauddetectorEventTypeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccfrauddetectoreventtype"

dataawsccfrauddetectoreventtype.NewDataAwsccFrauddetectorEventTypeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccFrauddetectorEventTypeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTags">DataAwsccFrauddetectorEventTypeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccFrauddetectorEventTypeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFrauddetectorEventType.DataAwsccFrauddetectorEventTypeTags">DataAwsccFrauddetectorEventTypeTags</a>

---



