# `dataAwsccIotTopicRuleDestination` Submodule <a name="`dataAwsccIotTopicRuleDestination` Submodule" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotTopicRuleDestination <a name="DataAwsccIotTopicRuleDestination" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_topic_rule_destination awscc_iot_topic_rule_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer"></a>

```typescript
import { dataAwsccIotTopicRuleDestination } from '@cdktn/provider-awscc'

new dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination(scope: Construct, id: string, config: DataAwsccIotTopicRuleDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig">DataAwsccIotTopicRuleDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig">DataAwsccIotTopicRuleDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotTopicRuleDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isConstruct"></a>

```typescript
import { dataAwsccIotTopicRuleDestination } from '@cdktn/provider-awscc'

dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformElement"></a>

```typescript
import { dataAwsccIotTopicRuleDestination } from '@cdktn/provider-awscc'

dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotTopicRuleDestination } from '@cdktn/provider-awscc'

dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.generateConfigForImport"></a>

```typescript
import { dataAwsccIotTopicRuleDestination } from '@cdktn/provider-awscc'

dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotTopicRuleDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotTopicRuleDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotTopicRuleDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_topic_rule_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotTopicRuleDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.httpUrlProperties">httpUrlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference">DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.vpcProperties">vpcProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference">DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `httpUrlProperties`<sup>Required</sup> <a name="httpUrlProperties" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.httpUrlProperties"></a>

```typescript
public readonly httpUrlProperties: DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference">DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `vpcProperties`<sup>Required</sup> <a name="vpcProperties" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.vpcProperties"></a>

```typescript
public readonly vpcProperties: DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference">DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotTopicRuleDestinationConfig <a name="DataAwsccIotTopicRuleDestinationConfig" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.Initializer"></a>

```typescript
import { dataAwsccIotTopicRuleDestination } from '@cdktn/provider-awscc'

const dataAwsccIotTopicRuleDestinationConfig: dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_topic_rule_destination#id DataAwsccIotTopicRuleDestination#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotTopicRuleDestinationHttpUrlProperties <a name="DataAwsccIotTopicRuleDestinationHttpUrlProperties" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlProperties.Initializer"></a>

```typescript
import { dataAwsccIotTopicRuleDestination } from '@cdktn/provider-awscc'

const dataAwsccIotTopicRuleDestinationHttpUrlProperties: dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlProperties = { ... }
```


### DataAwsccIotTopicRuleDestinationVpcProperties <a name="DataAwsccIotTopicRuleDestinationVpcProperties" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcProperties.Initializer"></a>

```typescript
import { dataAwsccIotTopicRuleDestination } from '@cdktn/provider-awscc'

const dataAwsccIotTopicRuleDestinationVpcProperties: dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference <a name="DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotTopicRuleDestination } from '@cdktn/provider-awscc'

new dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrl">confirmationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlProperties">DataAwsccIotTopicRuleDestinationHttpUrlProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confirmationUrl`<sup>Required</sup> <a name="confirmationUrl" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrl"></a>

```typescript
public readonly confirmationUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotTopicRuleDestinationHttpUrlProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationHttpUrlProperties">DataAwsccIotTopicRuleDestinationHttpUrlProperties</a>

---


### DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference <a name="DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotTopicRuleDestination } from '@cdktn/provider-awscc'

new dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcProperties">DataAwsccIotTopicRuleDestinationVpcProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotTopicRuleDestinationVpcProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotTopicRuleDestination.DataAwsccIotTopicRuleDestinationVpcProperties">DataAwsccIotTopicRuleDestinationVpcProperties</a>

---



