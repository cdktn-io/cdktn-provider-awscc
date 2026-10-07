# `dataAwsccSmsvoiceRcsAgent` Submodule <a name="`dataAwsccSmsvoiceRcsAgent` Submodule" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSmsvoiceRcsAgent <a name="DataAwsccSmsvoiceRcsAgent" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent awscc_smsvoice_rcs_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceRcsAgent } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent(scope: Construct, id: string, config: DataAwsccSmsvoiceRcsAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig">DataAwsccSmsvoiceRcsAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig">DataAwsccSmsvoiceRcsAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isConstruct"></a>

```typescript
import { dataAwsccSmsvoiceRcsAgent } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformElement"></a>

```typescript
import { dataAwsccSmsvoiceRcsAgent } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformDataSource"></a>

```typescript
import { dataAwsccSmsvoiceRcsAgent } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport"></a>

```typescript
import { dataAwsccSmsvoiceRcsAgent } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSmsvoiceRcsAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSmsvoiceRcsAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSmsvoiceRcsAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.optOutListName">optOutListName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.rcsAgentArn">rcsAgentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.rcsAgentId">rcsAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList">DataAwsccSmsvoiceRcsAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.testingAgent">testingAgent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference">DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayChannelArn">twoWayChannelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayChannelRole">twoWayChannelRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayEnabled">twoWayEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3BucketName">twoWayMediaS3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix">twoWayMediaS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3Role">twoWayMediaS3Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayRcsEventsEnabled">twoWayRcsEventsEnabled</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `optOutListName`<sup>Required</sup> <a name="optOutListName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.optOutListName"></a>

```typescript
public readonly optOutListName: string;
```

- *Type:* string

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `rcsAgentArn`<sup>Required</sup> <a name="rcsAgentArn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.rcsAgentArn"></a>

```typescript
public readonly rcsAgentArn: string;
```

- *Type:* string

---

##### `rcsAgentId`<sup>Required</sup> <a name="rcsAgentId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.rcsAgentId"></a>

```typescript
public readonly rcsAgentId: string;
```

- *Type:* string

---

##### `selfManagedOptOutsEnabled`<sup>Required</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.selfManagedOptOutsEnabled"></a>

```typescript
public readonly selfManagedOptOutsEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.tags"></a>

```typescript
public readonly tags: DataAwsccSmsvoiceRcsAgentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList">DataAwsccSmsvoiceRcsAgentTagsList</a>

---

##### `testingAgent`<sup>Required</sup> <a name="testingAgent" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.testingAgent"></a>

```typescript
public readonly testingAgent: DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference">DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference</a>

---

##### `twoWayChannelArn`<sup>Required</sup> <a name="twoWayChannelArn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayChannelArn"></a>

```typescript
public readonly twoWayChannelArn: string;
```

- *Type:* string

---

##### `twoWayChannelRole`<sup>Required</sup> <a name="twoWayChannelRole" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayChannelRole"></a>

```typescript
public readonly twoWayChannelRole: string;
```

- *Type:* string

---

##### `twoWayEnabled`<sup>Required</sup> <a name="twoWayEnabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayEnabled"></a>

```typescript
public readonly twoWayEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `twoWayMediaS3BucketName`<sup>Required</sup> <a name="twoWayMediaS3BucketName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3BucketName"></a>

```typescript
public readonly twoWayMediaS3BucketName: string;
```

- *Type:* string

---

##### `twoWayMediaS3KeyPrefix`<sup>Required</sup> <a name="twoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix"></a>

```typescript
public readonly twoWayMediaS3KeyPrefix: string;
```

- *Type:* string

---

##### `twoWayMediaS3Role`<sup>Required</sup> <a name="twoWayMediaS3Role" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3Role"></a>

```typescript
public readonly twoWayMediaS3Role: string;
```

- *Type:* string

---

##### `twoWayRcsEventsEnabled`<sup>Required</sup> <a name="twoWayRcsEventsEnabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayRcsEventsEnabled"></a>

```typescript
public readonly twoWayRcsEventsEnabled: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSmsvoiceRcsAgentConfig <a name="DataAwsccSmsvoiceRcsAgentConfig" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceRcsAgent } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceRcsAgentConfig: dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent#id DataAwsccSmsvoiceRcsAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSmsvoiceRcsAgentTags <a name="DataAwsccSmsvoiceRcsAgentTags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceRcsAgent } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceRcsAgentTags: dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags = { ... }
```


### DataAwsccSmsvoiceRcsAgentTestingAgent <a name="DataAwsccSmsvoiceRcsAgentTestingAgent" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceRcsAgent } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceRcsAgentTestingAgent: dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSmsvoiceRcsAgentTagsList <a name="DataAwsccSmsvoiceRcsAgentTagsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceRcsAgent } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSmsvoiceRcsAgentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSmsvoiceRcsAgentTagsOutputReference <a name="DataAwsccSmsvoiceRcsAgentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceRcsAgent } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags">DataAwsccSmsvoiceRcsAgentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSmsvoiceRcsAgentTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags">DataAwsccSmsvoiceRcsAgentTags</a>

---


### DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference <a name="DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceRcsAgent } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId">registrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId">testingAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus">testingAgentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent">DataAwsccSmsvoiceRcsAgentTestingAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `registrationId`<sup>Required</sup> <a name="registrationId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId"></a>

```typescript
public readonly registrationId: string;
```

- *Type:* string

---

##### `testingAgentId`<sup>Required</sup> <a name="testingAgentId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId"></a>

```typescript
public readonly testingAgentId: string;
```

- *Type:* string

---

##### `testingAgentStatus`<sup>Required</sup> <a name="testingAgentStatus" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus"></a>

```typescript
public readonly testingAgentStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSmsvoiceRcsAgentTestingAgent;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent">DataAwsccSmsvoiceRcsAgentTestingAgent</a>

---



