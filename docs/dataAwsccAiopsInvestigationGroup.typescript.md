# `dataAwsccAiopsInvestigationGroup` Submodule <a name="`dataAwsccAiopsInvestigationGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAiopsInvestigationGroup <a name="DataAwsccAiopsInvestigationGroup" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/aiops_investigation_group awscc_aiops_investigation_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

new dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup(scope: Construct, id: string, config: DataAwsccAiopsInvestigationGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig">DataAwsccAiopsInvestigationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig">DataAwsccAiopsInvestigationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAiopsInvestigationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isConstruct"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformElement"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAiopsInvestigationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAiopsInvestigationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAiopsInvestigationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/aiops_investigation_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAiopsInvestigationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.chatbotNotificationChannels">chatbotNotificationChannels</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList">DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.crossAccountConfigurations">crossAccountConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList">DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference">DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.investigationGroupPolicy">investigationGroupPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled">isCloudTrailEventHistoryEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lastModifiedAt">lastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lastModifiedBy">lastModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tagKeyBoundaries">tagKeyBoundaries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList">DataAwsccAiopsInvestigationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `chatbotNotificationChannels`<sup>Required</sup> <a name="chatbotNotificationChannels" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.chatbotNotificationChannels"></a>

```typescript
public readonly chatbotNotificationChannels: DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList">DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `crossAccountConfigurations`<sup>Required</sup> <a name="crossAccountConfigurations" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.crossAccountConfigurations"></a>

```typescript
public readonly crossAccountConfigurations: DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList">DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList</a>

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference">DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference</a>

---

##### `investigationGroupPolicy`<sup>Required</sup> <a name="investigationGroupPolicy" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.investigationGroupPolicy"></a>

```typescript
public readonly investigationGroupPolicy: string;
```

- *Type:* string

---

##### `isCloudTrailEventHistoryEnabled`<sup>Required</sup> <a name="isCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled"></a>

```typescript
public readonly isCloudTrailEventHistoryEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lastModifiedAt"></a>

```typescript
public readonly lastModifiedAt: string;
```

- *Type:* string

---

##### `lastModifiedBy`<sup>Required</sup> <a name="lastModifiedBy" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lastModifiedBy"></a>

```typescript
public readonly lastModifiedBy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tagKeyBoundaries`<sup>Required</sup> <a name="tagKeyBoundaries" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tagKeyBoundaries"></a>

```typescript
public readonly tagKeyBoundaries: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tags"></a>

```typescript
public readonly tags: DataAwsccAiopsInvestigationGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList">DataAwsccAiopsInvestigationGroupTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAiopsInvestigationGroupChatbotNotificationChannels <a name="DataAwsccAiopsInvestigationGroupChatbotNotificationChannels" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels.Initializer"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

const dataAwsccAiopsInvestigationGroupChatbotNotificationChannels: dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels = { ... }
```


### DataAwsccAiopsInvestigationGroupConfig <a name="DataAwsccAiopsInvestigationGroupConfig" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.Initializer"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

const dataAwsccAiopsInvestigationGroupConfig: dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/aiops_investigation_group#id DataAwsccAiopsInvestigationGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAiopsInvestigationGroupCrossAccountConfigurations <a name="DataAwsccAiopsInvestigationGroupCrossAccountConfigurations" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations.Initializer"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

const dataAwsccAiopsInvestigationGroupCrossAccountConfigurations: dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations = { ... }
```


### DataAwsccAiopsInvestigationGroupEncryptionConfig <a name="DataAwsccAiopsInvestigationGroupEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig.Initializer"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

const dataAwsccAiopsInvestigationGroupEncryptionConfig: dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig = { ... }
```


### DataAwsccAiopsInvestigationGroupTags <a name="DataAwsccAiopsInvestigationGroupTags" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags.Initializer"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

const dataAwsccAiopsInvestigationGroupTags: dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList <a name="DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

new dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.get"></a>

```typescript
public get(index: number): DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference <a name="DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

new dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns">chatConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels">DataAwsccAiopsInvestigationGroupChatbotNotificationChannels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chatConfigurationArns`<sup>Required</sup> <a name="chatConfigurationArns" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns"></a>

```typescript
public readonly chatConfigurationArns: string[];
```

- *Type:* string[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAiopsInvestigationGroupChatbotNotificationChannels;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels">DataAwsccAiopsInvestigationGroupChatbotNotificationChannels</a>

---


### DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList <a name="DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

new dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference <a name="DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

new dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn">sourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations">DataAwsccAiopsInvestigationGroupCrossAccountConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceRoleArn`<sup>Required</sup> <a name="sourceRoleArn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn"></a>

```typescript
public readonly sourceRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAiopsInvestigationGroupCrossAccountConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations">DataAwsccAiopsInvestigationGroupCrossAccountConfigurations</a>

---


### DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference <a name="DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

new dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType">encryptionConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig">DataAwsccAiopsInvestigationGroupEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfigurationType`<sup>Required</sup> <a name="encryptionConfigurationType" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType"></a>

```typescript
public readonly encryptionConfigurationType: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAiopsInvestigationGroupEncryptionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig">DataAwsccAiopsInvestigationGroupEncryptionConfig</a>

---


### DataAwsccAiopsInvestigationGroupTagsList <a name="DataAwsccAiopsInvestigationGroupTagsList" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

new dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAiopsInvestigationGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAiopsInvestigationGroupTagsOutputReference <a name="DataAwsccAiopsInvestigationGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAiopsInvestigationGroup } from '@cdktn/provider-awscc'

new dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags">DataAwsccAiopsInvestigationGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAiopsInvestigationGroupTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags">DataAwsccAiopsInvestigationGroupTags</a>

---



