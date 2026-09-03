# `dataAwsccElementalinferenceFeed` Submodule <a name="`dataAwsccElementalinferenceFeed` Submodule" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElementalinferenceFeed <a name="DataAwsccElementalinferenceFeed" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elementalinference_feed awscc_elementalinference_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.NewDataAwsccElementalinferenceFeed(scope Construct, id *string, config DataAwsccElementalinferenceFeedConfig) DataAwsccElementalinferenceFeed
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig">DataAwsccElementalinferenceFeedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig">DataAwsccElementalinferenceFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElementalinferenceFeed resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.DataAwsccElementalinferenceFeed_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.DataAwsccElementalinferenceFeed_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.DataAwsccElementalinferenceFeed_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.DataAwsccElementalinferenceFeed_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccElementalinferenceFeed resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccElementalinferenceFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccElementalinferenceFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elementalinference_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElementalinferenceFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.accessRoleArn">AccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.dataEndpoints">DataEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.feedId">FeedId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList">DataAwsccElementalinferenceFeedOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessRoleArn`<sup>Required</sup> <a name="AccessRoleArn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.accessRoleArn"></a>

```go
func AccessRoleArn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataEndpoints`<sup>Required</sup> <a name="DataEndpoints" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.dataEndpoints"></a>

```go
func DataEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.feedId"></a>

```go
func FeedId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.outputs"></a>

```go
func Outputs() DataAwsccElementalinferenceFeedOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList">DataAwsccElementalinferenceFeedOutputsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElementalinferenceFeedConfig <a name="DataAwsccElementalinferenceFeedConfig" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

&dataawsccelementalinferencefeed.DataAwsccElementalinferenceFeedConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elementalinference_feed#id DataAwsccElementalinferenceFeed#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElementalinferenceFeedOutputs <a name="DataAwsccElementalinferenceFeedOutputs" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

&dataawsccelementalinferencefeed.DataAwsccElementalinferenceFeedOutputs {

}
```


### DataAwsccElementalinferenceFeedOutputsOutputConfig <a name="DataAwsccElementalinferenceFeedOutputsOutputConfig" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

&dataawsccelementalinferencefeed.DataAwsccElementalinferenceFeedOutputsOutputConfig {

}
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigClipping <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigClipping" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

&dataawsccelementalinferencefeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping {

}
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

&dataawsccelementalinferencefeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration {

}
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigCropping <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigCropping" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCropping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCropping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

&dataawsccelementalinferencefeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCropping {

}
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

&dataawsccelementalinferencefeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups {

}
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

&dataawsccelementalinferencefeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling {

}
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

&dataawsccelementalinferencefeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElementalinferenceFeedOutputsList <a name="DataAwsccElementalinferenceFeedOutputsList" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.NewDataAwsccElementalinferenceFeedOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElementalinferenceFeedOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.get"></a>

```go
func Get(index *f64) DataAwsccElementalinferenceFeedOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.NewDataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fixtureId">FixtureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixtureId`<sup>Required</sup> <a name="FixtureId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fixtureId"></a>

```go
func FixtureId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.NewDataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata">CallbackMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.dataSourceConfiguration">DataSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping">DataAwsccElementalinferenceFeedOutputsOutputConfigClipping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CallbackMetadata`<sup>Required</sup> <a name="CallbackMetadata" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata"></a>

```go
func CallbackMetadata() *string
```

- *Type:* *string

---

##### `DataSourceConfiguration`<sup>Required</sup> <a name="DataSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.dataSourceConfiguration"></a>

```go
func DataSourceConfiguration() DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElementalinferenceFeedOutputsOutputConfigClipping
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping">DataAwsccElementalinferenceFeedOutputsOutputConfigClipping</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.NewDataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.templateGroups">TemplateGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList">DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCropping">DataAwsccElementalinferenceFeedOutputsOutputConfigCropping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateGroups`<sup>Required</sup> <a name="TemplateGroups" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.templateGroups"></a>

```go
func TemplateGroups() DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList">DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElementalinferenceFeedOutputsOutputConfigCropping
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCropping">DataAwsccElementalinferenceFeedOutputsOutputConfigCropping</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.NewDataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.get"></a>

```go
func Get(index *f64) DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.NewDataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.templateUris">TemplateUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups">DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TemplateUris`<sup>Required</sup> <a name="TemplateUris" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.templateUris"></a>

```go
func TemplateUris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups">DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.NewDataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping">Clipping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping">Cropping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling">Subtitling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfig">DataAwsccElementalinferenceFeedOutputsOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Clipping`<sup>Required</sup> <a name="Clipping" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping"></a>

```go
func Clipping() DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a>

---

##### `Cropping`<sup>Required</sup> <a name="Cropping" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping"></a>

```go
func Cropping() DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigCroppingOutputReference</a>

---

##### `Subtitling`<sup>Required</sup> <a name="Subtitling" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling"></a>

```go
func Subtitling() DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElementalinferenceFeedOutputsOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfig">DataAwsccElementalinferenceFeedOutputsOutputConfig</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.NewDataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height">Height</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width">Width</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height"></a>

```go
func Height() *f64
```

- *Type:* *f64

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width"></a>

```go
func Width() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.NewDataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio">AspectRatio</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary">Dictionary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter">ProfanityFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AspectRatio`<sup>Required</sup> <a name="AspectRatio" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio"></a>

```go
func AspectRatio() DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a>

---

##### `Dictionary`<sup>Required</sup> <a name="Dictionary" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary"></a>

```go
func Dictionary() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `ProfanityFilter`<sup>Required</sup> <a name="ProfanityFilter" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter"></a>

```go
func ProfanityFilter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelementalinferencefeed"

dataawsccelementalinferencefeed.NewDataAwsccElementalinferenceFeedOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElementalinferenceFeedOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputs">DataAwsccElementalinferenceFeedOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.outputConfig"></a>

```go
func OutputConfig() DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElementalinferenceFeedOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputs">DataAwsccElementalinferenceFeedOutputs</a>

---



