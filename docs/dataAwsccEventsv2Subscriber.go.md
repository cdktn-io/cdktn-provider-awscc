# `dataAwsccEventsv2Subscriber` Submodule <a name="`dataAwsccEventsv2Subscriber` Submodule" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEventsv2Subscriber <a name="DataAwsccEventsv2Subscriber" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/eventsv2_subscriber awscc_eventsv2_subscriber}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2Subscriber(scope Construct, id *string, config DataAwsccEventsv2SubscriberConfig) DataAwsccEventsv2Subscriber
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig">DataAwsccEventsv2SubscriberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig">DataAwsccEventsv2SubscriberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEventsv2Subscriber resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.DataAwsccEventsv2Subscriber_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.DataAwsccEventsv2Subscriber_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.DataAwsccEventsv2Subscriber_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.DataAwsccEventsv2Subscriber_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEventsv2Subscriber resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEventsv2Subscriber to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEventsv2Subscriber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/eventsv2_subscriber#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEventsv2Subscriber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.batchConfiguration">BatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference">DataAwsccEventsv2SubscriberBatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.busName">BusName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.eventBusArn">EventBusArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference">DataAwsccEventsv2SubscriberFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.invokeConfiguration">InvokeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference">DataAwsccEventsv2SubscriberLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.onFailureConfiguration">OnFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference">DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.pointInTimeConfiguration">PointInTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference">DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.resumePosition">ResumePosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference">DataAwsccEventsv2SubscriberRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.startingPosition">StartingPosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.subscriberArn">SubscriberArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList">DataAwsccEventsv2SubscriberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.transformer">Transformer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference">DataAwsccEventsv2SubscriberTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BatchConfiguration`<sup>Required</sup> <a name="BatchConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.batchConfiguration"></a>

```go
func BatchConfiguration() DataAwsccEventsv2SubscriberBatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference">DataAwsccEventsv2SubscriberBatchConfigurationOutputReference</a>

---

##### `BusName`<sup>Required</sup> <a name="BusName" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.busName"></a>

```go
func BusName() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.eventBusArn"></a>

```go
func EventBusArn() *string
```

- *Type:* *string

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.filterConfiguration"></a>

```go
func FilterConfiguration() DataAwsccEventsv2SubscriberFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference">DataAwsccEventsv2SubscriberFilterConfigurationOutputReference</a>

---

##### `InvokeConfiguration`<sup>Required</sup> <a name="InvokeConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.invokeConfiguration"></a>

```go
func InvokeConfiguration() DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference</a>

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.logConfiguration"></a>

```go
func LogConfiguration() DataAwsccEventsv2SubscriberLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference">DataAwsccEventsv2SubscriberLogConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnFailureConfiguration`<sup>Required</sup> <a name="OnFailureConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.onFailureConfiguration"></a>

```go
func OnFailureConfiguration() DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference">DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference</a>

---

##### `PointInTimeConfiguration`<sup>Required</sup> <a name="PointInTimeConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.pointInTimeConfiguration"></a>

```go
func PointInTimeConfiguration() DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference">DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference</a>

---

##### `ResumePosition`<sup>Required</sup> <a name="ResumePosition" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.resumePosition"></a>

```go
func ResumePosition() *string
```

- *Type:* *string

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.retryPolicy"></a>

```go
func RetryPolicy() DataAwsccEventsv2SubscriberRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference">DataAwsccEventsv2SubscriberRetryPolicyOutputReference</a>

---

##### `StartingPosition`<sup>Required</sup> <a name="StartingPosition" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.startingPosition"></a>

```go
func StartingPosition() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubscriberArn`<sup>Required</sup> <a name="SubscriberArn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.subscriberArn"></a>

```go
func SubscriberArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.tags"></a>

```go
func Tags() DataAwsccEventsv2SubscriberTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList">DataAwsccEventsv2SubscriberTagsList</a>

---

##### `Transformer`<sup>Required</sup> <a name="Transformer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.transformer"></a>

```go
func Transformer() DataAwsccEventsv2SubscriberTransformerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference">DataAwsccEventsv2SubscriberTransformerOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2Subscriber.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEventsv2SubscriberBatchConfiguration <a name="DataAwsccEventsv2SubscriberBatchConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberBatchConfiguration {

}
```


### DataAwsccEventsv2SubscriberConfig <a name="DataAwsccEventsv2SubscriberConfig" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/eventsv2_subscriber#id DataAwsccEventsv2Subscriber#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEventsv2SubscriberFilterConfiguration <a name="DataAwsccEventsv2SubscriberFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberFilterConfiguration {

}
```


### DataAwsccEventsv2SubscriberFilterConfigurationFilters <a name="DataAwsccEventsv2SubscriberFilterConfigurationFilters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFilters {

}
```


### DataAwsccEventsv2SubscriberInvokeConfiguration <a name="DataAwsccEventsv2SubscriberInvokeConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfiguration {

}
```


### DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters {

}
```


### DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration <a name="DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration {

}
```


### DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata <a name="DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata {

}
```


### DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters {

}
```


### DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters {

}
```


### DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters {

}
```


### DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters {

}
```


### DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes {

}
```


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters {

}
```


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes {

}
```


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes {

}
```


### DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters {

}
```


### DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters <a name="DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters {

}
```


### DataAwsccEventsv2SubscriberLogConfiguration <a name="DataAwsccEventsv2SubscriberLogConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberLogConfiguration {

}
```


### DataAwsccEventsv2SubscriberOnFailureConfiguration <a name="DataAwsccEventsv2SubscriberOnFailureConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberOnFailureConfiguration {

}
```


### DataAwsccEventsv2SubscriberPointInTimeConfiguration <a name="DataAwsccEventsv2SubscriberPointInTimeConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberPointInTimeConfiguration {

}
```


### DataAwsccEventsv2SubscriberRetryPolicy <a name="DataAwsccEventsv2SubscriberRetryPolicy" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberRetryPolicy {

}
```


### DataAwsccEventsv2SubscriberTags <a name="DataAwsccEventsv2SubscriberTags" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberTags {

}
```


### DataAwsccEventsv2SubscriberTransformer <a name="DataAwsccEventsv2SubscriberTransformer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberTransformer {

}
```


### DataAwsccEventsv2SubscriberTransformerJsonataConfiguration <a name="DataAwsccEventsv2SubscriberTransformerJsonataConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

&dataawscceventsv2subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEventsv2SubscriberBatchConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberBatchConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberBatchConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberBatchConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSize">MaxBatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSeconds">MaxBatchWindowInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfiguration">DataAwsccEventsv2SubscriberBatchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxBatchSize`<sup>Required</sup> <a name="MaxBatchSize" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSize"></a>

```go
func MaxBatchSize() *f64
```

- *Type:* *f64

---

##### `MaxBatchWindowInSeconds`<sup>Required</sup> <a name="MaxBatchWindowInSeconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSeconds"></a>

```go
func MaxBatchWindowInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberBatchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberBatchConfiguration">DataAwsccEventsv2SubscriberBatchConfiguration</a>

---


### DataAwsccEventsv2SubscriberFilterConfigurationFiltersList <a name="DataAwsccEventsv2SubscriberFilterConfigurationFiltersList" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberFilterConfigurationFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEventsv2SubscriberFilterConfigurationFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.get"></a>

```go
func Get(index *f64) DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference <a name="DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFilters">DataAwsccEventsv2SubscriberFilterConfigurationFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberFilterConfigurationFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFilters">DataAwsccEventsv2SubscriberFilterConfigurationFilters</a>

---


### DataAwsccEventsv2SubscriberFilterConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberFilterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberFilterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList">DataAwsccEventsv2SubscriberFilterConfigurationFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfiguration">DataAwsccEventsv2SubscriberFilterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.filters"></a>

```go
func Filters() DataAwsccEventsv2SubscriberFilterConfigurationFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationFiltersList">DataAwsccEventsv2SubscriberFilterConfigurationFiltersList</a>

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberFilterConfiguration">DataAwsccEventsv2SubscriberFilterConfiguration</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationType">DeduplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeduplicationType`<sup>Required</sup> <a name="DeduplicationType" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationType"></a>

```go
func DeduplicationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfiguration">DeduplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadata">Metadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadata">SystemMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeduplicationConfiguration`<sup>Required</sup> <a name="DeduplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfiguration"></a>

```go
func DeduplicationConfiguration() DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `SystemMetadata`<sup>Required</sup> <a name="SystemMetadata" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadata"></a>

```go
func SystemMetadata() DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationId">DeduplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupId">EventGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeduplicationId`<sup>Required</sup> <a name="DeduplicationId" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationId"></a>

```go
func DeduplicationId() *string
```

- *Type:* *string

---

##### `EventGroupId`<sup>Required</sup> <a name="EventGroupId" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupId"></a>

```go
func EventGroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParameters">HeaderParameters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValues">PathParameterValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParameters">QueryStringParameters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters">DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderParameters`<sup>Required</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParameters"></a>

```go
func HeaderParameters() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InvocationTimeoutSeconds`<sup>Required</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSeconds"></a>

```go
func InvocationTimeoutSeconds() *string
```

- *Type:* *string

---

##### `PathParameterValues`<sup>Required</sup> <a name="PathParameterValues" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValues"></a>

```go
func PathParameterValues() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringParameters`<sup>Required</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParameters"></a>

```go
func QueryStringParameters() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters">DataAwsccEventsv2SubscriberInvokeConfigurationHttpParameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKey">ExplicitHashKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKey">PartitionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters">DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExplicitHashKey`<sup>Required</sup> <a name="ExplicitHashKey" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKey"></a>

```go
func ExplicitHashKey() *string
```

- *Type:* *string

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKey"></a>

```go
func PartitionKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters">DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionName">DurableExecutionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationType">InvocationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifier">Qualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters">DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurableExecutionName`<sup>Required</sup> <a name="DurableExecutionName" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionName"></a>

```go
func DurableExecutionName() *string
```

- *Type:* *string

---

##### `InvocationTimeoutSeconds`<sup>Required</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSeconds"></a>

```go
func InvocationTimeoutSeconds() *string
```

- *Type:* *string

---

##### `InvocationType`<sup>Required</sup> <a name="InvocationType" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationType"></a>

```go
func InvocationType() *string
```

- *Type:* *string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifier"></a>

```go
func Qualifier() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters">DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2Parameters">EventBusV2Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.httpParameters">HttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParameters">KinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParameters">LambdaParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.snsParameters">SnsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParameters">SqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParameters">StepFunctionsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.targetArn">TargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParameters">UniversalTargetParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfiguration">DataAwsccEventsv2SubscriberInvokeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventBusV2Parameters`<sup>Required</sup> <a name="EventBusV2Parameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2Parameters"></a>

```go
func EventBusV2Parameters() DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference</a>

---

##### `HttpParameters`<sup>Required</sup> <a name="HttpParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.httpParameters"></a>

```go
func HttpParameters() DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference</a>

---

##### `KinesisParameters`<sup>Required</sup> <a name="KinesisParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParameters"></a>

```go
func KinesisParameters() DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference</a>

---

##### `LambdaParameters`<sup>Required</sup> <a name="LambdaParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParameters"></a>

```go
func LambdaParameters() DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SnsParameters`<sup>Required</sup> <a name="SnsParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.snsParameters"></a>

```go
func SnsParameters() DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference</a>

---

##### `SqsParameters`<sup>Required</sup> <a name="SqsParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParameters"></a>

```go
func SqsParameters() DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference</a>

---

##### `StepFunctionsParameters`<sup>Required</sup> <a name="StepFunctionsParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParameters"></a>

```go
func StepFunctionsParameters() DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference</a>

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.targetArn"></a>

```go
func TargetArn() *string
```

- *Type:* *string

---

##### `UniversalTargetParameters`<sup>Required</sup> <a name="UniversalTargetParameters" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParameters"></a>

```go
func UniversalTargetParameters() DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference">DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfiguration">DataAwsccEventsv2SubscriberInvokeConfiguration</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get"></a>

```go
func Get(key *string) DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValue">BinaryValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryValue`<sup>Required</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValue"></a>

```go
func BinaryValue() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributes">MessageAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationId">MessageDeduplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupId">MessageGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructure">MessageStructure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageAttributes`<sup>Required</sup> <a name="MessageAttributes" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributes"></a>

```go
func MessageAttributes() DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap</a>

---

##### `MessageDeduplicationId`<sup>Required</sup> <a name="MessageDeduplicationId" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationId"></a>

```go
func MessageDeduplicationId() *string
```

- *Type:* *string

---

##### `MessageGroupId`<sup>Required</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupId"></a>

```go
func MessageGroupId() *string
```

- *Type:* *string

---

##### `MessageStructure`<sup>Required</sup> <a name="MessageStructure" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructure"></a>

```go
func MessageStructure() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters">DataAwsccEventsv2SubscriberInvokeConfigurationSnsParameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get"></a>

```go
func Get(key *string) DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValue">BinaryValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryValue`<sup>Required</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValue"></a>

```go
func BinaryValue() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get"></a>

```go
func Get(key *string) DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValue">BinaryValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryValue`<sup>Required</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValue"></a>

```go
func BinaryValue() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySeconds">DelaySeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributes">MessageAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationId">MessageDeduplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupId">MessageGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributes">MessageSystemAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelaySeconds`<sup>Required</sup> <a name="DelaySeconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySeconds"></a>

```go
func DelaySeconds() *string
```

- *Type:* *string

---

##### `MessageAttributes`<sup>Required</sup> <a name="MessageAttributes" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributes"></a>

```go
func MessageAttributes() DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap</a>

---

##### `MessageDeduplicationId`<sup>Required</sup> <a name="MessageDeduplicationId" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationId"></a>

```go
func MessageDeduplicationId() *string
```

- *Type:* *string

---

##### `MessageGroupId`<sup>Required</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupId"></a>

```go
func MessageGroupId() *string
```

- *Type:* *string

---

##### `MessageSystemAttributes`<sup>Required</sup> <a name="MessageSystemAttributes" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributes"></a>

```go
func MessageSystemAttributes() DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters">DataAwsccEventsv2SubscriberInvokeConfigurationSqsParameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationType">InvocationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeader">TraceHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters">DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InvocationTimeoutSeconds`<sup>Required</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSeconds"></a>

```go
func InvocationTimeoutSeconds() *string
```

- *Type:* *string

---

##### `InvocationType`<sup>Required</sup> <a name="InvocationType" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationType"></a>

```go
func InvocationType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TraceHeader`<sup>Required</sup> <a name="TraceHeader" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeader"></a>

```go
func TraceHeader() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters">DataAwsccEventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

---


### DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference <a name="DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters">DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `InvocationTimeoutSeconds`<sup>Required</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSeconds"></a>

```go
func InvocationTimeoutSeconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters">DataAwsccEventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

---


### DataAwsccEventsv2SubscriberLogConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberLogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberLogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.includePayload">IncludePayload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfiguration">DataAwsccEventsv2SubscriberLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludePayload`<sup>Required</sup> <a name="IncludePayload" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.includePayload"></a>

```go
func IncludePayload() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberLogConfiguration">DataAwsccEventsv2SubscriberLogConfiguration</a>

---


### DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfiguration">DataAwsccEventsv2SubscriberOnFailureConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberOnFailureConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberOnFailureConfiguration">DataAwsccEventsv2SubscriberOnFailureConfiguration</a>

---


### DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPoint">EndPoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointType">PointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPoint">StartingPoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfiguration">DataAwsccEventsv2SubscriberPointInTimeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndPoint`<sup>Required</sup> <a name="EndPoint" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPoint"></a>

```go
func EndPoint() *f64
```

- *Type:* *f64

---

##### `PointType`<sup>Required</sup> <a name="PointType" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointType"></a>

```go
func PointType() *string
```

- *Type:* *string

---

##### `StartingPoint`<sup>Required</sup> <a name="StartingPoint" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPoint"></a>

```go
func StartingPoint() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberPointInTimeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberPointInTimeConfiguration">DataAwsccEventsv2SubscriberPointInTimeConfiguration</a>

---


### DataAwsccEventsv2SubscriberRetryPolicyOutputReference <a name="DataAwsccEventsv2SubscriberRetryPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberRetryPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberRetryPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSeconds">MaxEventAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttempts">MaxRetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.retryStrategy">RetryStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicy">DataAwsccEventsv2SubscriberRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxEventAgeInSeconds`<sup>Required</sup> <a name="MaxEventAgeInSeconds" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSeconds"></a>

```go
func MaxEventAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `MaxRetryAttempts`<sup>Required</sup> <a name="MaxRetryAttempts" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttempts"></a>

```go
func MaxRetryAttempts() *f64
```

- *Type:* *f64

---

##### `RetryStrategy`<sup>Required</sup> <a name="RetryStrategy" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.retryStrategy"></a>

```go
func RetryStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberRetryPolicy">DataAwsccEventsv2SubscriberRetryPolicy</a>

---


### DataAwsccEventsv2SubscriberTagsList <a name="DataAwsccEventsv2SubscriberTagsList" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEventsv2SubscriberTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEventsv2SubscriberTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEventsv2SubscriberTagsOutputReference <a name="DataAwsccEventsv2SubscriberTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEventsv2SubscriberTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTags">DataAwsccEventsv2SubscriberTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTags">DataAwsccEventsv2SubscriberTags</a>

---


### DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference <a name="DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfiguration">DataAwsccEventsv2SubscriberTransformerJsonataConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberTransformerJsonataConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfiguration">DataAwsccEventsv2SubscriberTransformerJsonataConfiguration</a>

---


### DataAwsccEventsv2SubscriberTransformerOutputReference <a name="DataAwsccEventsv2SubscriberTransformerOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscceventsv2subscriber"

dataawscceventsv2subscriber.NewDataAwsccEventsv2SubscriberTransformerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEventsv2SubscriberTransformerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.jsonataConfiguration">JsonataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference">DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformer">DataAwsccEventsv2SubscriberTransformer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonataConfiguration`<sup>Required</sup> <a name="JsonataConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.jsonataConfiguration"></a>

```go
func JsonataConfiguration() DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference">DataAwsccEventsv2SubscriberTransformerJsonataConfigurationOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEventsv2SubscriberTransformer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsv2Subscriber.DataAwsccEventsv2SubscriberTransformer">DataAwsccEventsv2SubscriberTransformer</a>

---



